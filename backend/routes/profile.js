const router = require("express").Router();
const Post = require("../models/Post");
const verifyAuth = require("../permissions/verifyAuth");

// get user posts
// private route
router.get("/", verifyAuth, (req, res) => {
  Post.find({ author: req.user.id })
    .populate({ path: "author", model: "user" })
    .then((posts) => {
      res.status(200).send(posts);
    })
    .catch((err) => console.log(err));
});

module.exports = router;
