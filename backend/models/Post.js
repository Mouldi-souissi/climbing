const mongoose = require("mongoose");

const subCommentSchema = new mongoose.Schema({
  name: String,
  userId: String,
  comment: { type: String, required: true },
  date: {
    type: Date,
    default: Date.now,
  },
});
const commentSchema = new mongoose.Schema({
  name: String,
  userId: String,
  comment: { type: String, required: true },
  date: {
    type: Date,
    default: Date.now,
  },
  subComments: [subCommentSchema],
});

const postSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    max: 50,
  },
  image: {
    type: String,
  },
  content: {
    type: String,
    max: 5000,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
  author: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "user",
  },
  likes: [{ type: mongoose.Schema.Types.ObjectId, ref: "user" }],
  comments: [commentSchema],
  tags: Array,
  user: { type: mongoose.Schema.Types.ObjectId, ref: "user" },
});

module.exports = mongoose.model("post", postSchema);
