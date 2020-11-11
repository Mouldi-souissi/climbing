const router = require("express").Router();
const Post = require("../models/Post");
const User = require("../models/User");
const verifyAuth = require("../permissions/verifyAuth");

// get users posts by id
// private route
router.get("/:id", verifyAuth, (req, res) => {
  Post.find({ author: req.params.id })
    .populate({ path: "author", model: "user" })
    .populate({
      path: "likes",
      model: "user",
    })
    .populate({
      path: "comments.user",
      model: "user",
    })
    .populate({
      path: "comments.subComments.user",
      model: "user",
    })
    .then((posts) => {
      res.status(200).send(posts);
    })
    .catch((err) => console.log("no such profile"));
});

// get user by id
// private route
router.get("/user:id", verifyAuth, (req, res) => {
  User.findById(req.params.id)
    .then((profileUser) => {
      res.status(200).send(profileUser);
    })
    .catch((err) => console.log("no such user"));
});

module.exports = router;
