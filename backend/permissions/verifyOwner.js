const Post = require("../models/Post");

module.exports = (req, res, next) => {
  Post.findById(req.params.id).then((post, err) => {
    if (err) return res.send("this post doesnt exist");
    if (post.author.toString() !== req.user.id) {
      res.status(401).send("you dont have access");
    } else {
      next();
    }
  });
};
