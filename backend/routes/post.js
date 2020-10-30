const router = require("express").Router();
const verify = require("./verifyToken");
const Post = require("../models/Post");
const postValidator = require("../validators/postValidator");

// get all post
// public route
router.get("/", (req, res) => {
  Post.find()
    .sort({ date: -1 })
    .then((posts) => res.json(posts))
    .catch((err) => console.log(err));
});

// create poste
// private route
router.post("/add", async (req, res) => {
  const post = new Post({
    title: req.body.title,
    image: req.body.image,
    content: req.body.content,
    author: { userId: req.body.userId, name: req.body.name },
  });
  try {
    const addedPost = await post.save();
    res.status(200).send(addedPost);
  } catch (err) {
    console.log(err);
  }
});

// find post by id
// public route
router.get("/:id", (req, res) => {
  Post.findById(req.params.id)
    .then((post) => res.json(post))
    .catch((err) => console.log(err));
});

// modify post by id
// private route
router.put("/edit:id", verify, postValidator, (req, res) => {
  Post.findByIdAndUpdate(req.params.id, {
    title: req.body.title,
    image: req.body.image,
    content: req.body.content,
    userId: req.body.userId,
  })
    .then((editedPost) => res.json(editedPost))
    .catch((err) => res.send(err));
});

// delete a post by id
// private route
router.delete("/delete:id", verify, (req, res) => {
  Post.findByIdAndDelete(req.params.id)
    .then(res.send("post deleted"))
    .catch((err) => res.send(err));
});
// like a post by id
// private
router.put("/like:id", async (req, res) => {
  let likedPost = await Post.findOne({ _id: req.params.id });
  let liked = likedPost.likes.find((like) => like.userId === req.body.userId);
  if (liked) {
    res.status(401).send("already liked");
    // likedPost.likes.pull({ userId: req.params.userId });
    // likedPost
    //   .save()
    //   .then(() => res.json(likedpost.likes))
    //   .catch((err) => res.send(err));
  } else {
    likedPost.likes.push({ userId: req.body.userId, name: req.body.name });
    likedPost
      .save()
      // Post.findOneAndUpdate(
      //   { _id: req.params.id },
      //   { $push: { likes: [{ userId: req.body.userId, name: req.body.name }] } },
      //   { new: true }
      // )
      .then(() => res.json(likedpost.likes))
      .catch((err) => res.send(err));
  }
});
module.exports = router;
