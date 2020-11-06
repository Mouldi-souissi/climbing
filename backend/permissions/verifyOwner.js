const Post = require("../models/Post");

module.exports = (req, res, next) => {
  Post.findById(req.params.id).then((post, err) => {
    if (err) return res.send("this post doesnt exist");
    // getting userId from token
    // const token = req.header("token");
    // const decoded = jwt.verify(token, "secret");

    if (post.author.userId !== req.user.id) {
      res.status(401).send("you dont have access");
    } else {
      next();
    }
  });
};
