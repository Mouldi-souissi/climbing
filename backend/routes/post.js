const router = require("express").Router();
const Post = require("../models/Post");
// const postValidator = require("../validators/postValidator");
const verifyAuth = require("../permissions/verifyAuth");
const verifyOwner = require("../permissions/verifyOwner");

// get all post
// public route
router.get("/", (req, res) => {
  Post.find()
    .sort({ date: -1 })
    .populate({ path: "author", model: "user" })
    .populate({
      path: "likes",
      model: "user",
    })
    .then((posts) => res.json(posts))
    .catch((err) => console.log(err));
});

// get post by id
// public route
router.get("/:id", (req, res) => {
  Post.findById(req.params.id)
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
    .then((post) => res.send(post))
    .catch((err) => console.log(err));
});

// get users posts by id
// private route
router.get("/user/:id", verifyAuth, (req, res) => {
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

// create poste
// private route
router.post("/add", verifyAuth, async (req, res) => {
  const post = new Post({
    title: req.body.title,
    image: req.body.image,
    content: req.body.content,
    author: req.user.id,
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

// like and unlike a post by id
// private route
router.put("/like:id", verifyAuth, async (req, res) => {
  let likedPost = await Post.findById(req.params.id).populate({
    path: "likes",
    model: "user",
  });

  let liked = likedPost.likes.find(
    (like) => like._id.toString() === req.user.id
  );

  if (liked) {
    likedPost.likes.pull(req.user.id);
    likedPost.save().then((post) => res.send(post));
  } else {
    likedPost.likes.push(req.user.id);
    likedPost
      .save()
      .then((post) => res.send(post))
      .catch((err) => res.send(err));
  }
});

// add comment
// private route
router.post("/addComment:id", verifyAuth, async (req, res) => {
  const commentedPost = await Post.findById(req.params.id).populate({
    path: "likes",
    model: "user",
  });

  try {
    commentedPost.comments.push({
      user: req.user.id,
      comment: req.body.comment,
    });

    commentedPost
      .save()
      .then((post) => res.send(post))
      .catch((err) => console.log(err));
  } catch (err) {
    res.status(404).send("no such post");
  }
});

// add sub comment
// private route verify auth
router.put("/addSubComment:id/:commentId", verifyAuth, async (req, res) => {
  const post = await Post.findById(req.params.id).populate({
    path: "likes",
    model: "user",
  });
  let comment = post.comments.find(
    (comment) => comment.id === req.params.commentId
  );
  comment.subComments.push({
    user: req.user.id,
    comment: req.body.comment,
  });
  post
    .save()
    .then((post) => res.send(post))
    .catch((err) => console.log(err));
});

// delete comment by author
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
      res.send(deletedComment);
    } catch (err) {
      res.send("no such comment");
    }
  }
);

module.exports = router;
