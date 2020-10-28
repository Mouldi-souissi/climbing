const router = require("express").Router();
const verify = require("./verifyToken");
const Post = require("../models/Post");
const postValidator = require("../validators/postValidator");

// get all post
// public route
router.get("/", (req, res) => {
  Post.find()
    .then((posts) => res.json(posts))
    .catch((err) => console.log(err));
});

// create poste
// private route
router.post("/add", postValidator, async (req, res) => {
  const post = new Post({
    title: req.body.title,
    image: req.body.image,
    content: req.body.content,
    userId: req.body.id,
  });
  try {
    const addedPost = await post.save();
    res.status(200).send("post added");
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
  Post.findOneAndDelete(req.params.id)
    .then(res.send("post deleted"))
    .catch((err) => res.send(err));
});
module.exports = router;
