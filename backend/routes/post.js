const router = require("express").Router();
const Post = require("../models/Post");
const postValidator = require("../validators/postValidator");
const verifyAuth = require("../permissions/verifyAuth");
const verifyOwner = require("../permissions/verifyOwner");

// get all post
// public route
router.get("/", (req, res) => {
  Post.find()
    .sort({ date: -1 })
    .then((posts) => res.json(posts))
    .catch((err) => console.log(err));
});

// get post by id
// public route
router.get("/:id", (req, res) => {
  Post.findById(req.params.id)
    .then((post) => res.send(post))
    .catch((err) => console.log(err));
});

// create poste
// private route
router.post("/add", verifyAuth, async (req, res) => {
  const post = new Post({
    title: req.body.title,
    image: req.body.image,
    content: req.body.content,
    author: { userId: req.user.id, name: req.user.name },
    tags: req.body.tags,
  });
  try {
    const addedPost = await post.save();
    res.status(200).send(addedPost);
  } catch (err) {
    console.log(err);
  }
});

// modify post by id
// private route, permission owner
router.put("/edit:id", verifyAuth, verifyOwner, (req, res) => {
  Post.findByIdAndUpdate(req.params.id, req.body, { new: true })
    .then((editedPost) => res.json(editedPost))
    .catch((err) => res.send(err));
});

// delete a post by id
// private route, permission owner
router.delete("/delete:id", verifyAuth, verifyOwner, (req, res) => {
  Post.findByIdAndDelete(req.params.id)
    .then(res.send("post deleted"))
    .catch((err) => res.send(err));
});

// like a post by id
// private route
router.put("/like:id", verifyAuth, async (req, res) => {
  let likedPost = await Post.findById(req.params.id);
  let liked = likedPost.likes.find((like) => like.userId === req.user.id);
  if (liked) {
    // res.status(401).send("already liked");
    likedPost
      .updateOne({ $pull: { likes: { userId: req.user.id } } }, { safe: true })
      .then((post) => res.send(post));
  } else {
    likedPost.likes.push({ userId: req.user.id, name: req.user.name });
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

// add comment
// private route
router.post("/addComment:id", verifyAuth, async (req, res) => {
  const commentedPost = await Post.findById(req.params.id);
  try {
    commentedPost.comments.push({
      name: req.user.name,
      userId: req.user.id,
      comment: req.body.comment,
    });
    commentedPost
      .save()
      .then(() => res.send(commentedPost))
      .catch((err) => console.log(err));
  } catch (err) {
    err.status(404).send("no such post");
  }
});

// delete comment
// private route permission owner
router.put(
  "/deleteComment/:id/:commentId",
  verifyAuth,
  verifyOwner,
  async (req, res) => {
    const deletedComment = await Post.findByIdAndUpdate(
      req.params.id,
      { $pull: { comments: { _id: req.params.commentId } } },
      { new: true }
    );
    try {
      res.send(deletedComment.comments);
    } catch (err) {
      res.send("no such comment");
    }
  }
);

module.exports = router;
