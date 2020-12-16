const mongoose = require("mongoose");

const subCommentSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "user",
  },
  comment: { type: String, required: true },
  date: {
    type: Date,
    default: Date.now,
  },
});
const commentSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "user",
  },
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
  likes: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "user",
      date: { type: Date, default: Date.now },
    },
  ],
  comments: [commentSchema],
  tags: Array,
});

module.exports = mongoose.model("post", postSchema);
