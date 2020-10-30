const mongoose = require("mongoose");

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
    userId: "",
    name: "",
  },
  likes: [{ name: String, userId: String }],
});

module.exports = mongoose.model("post", postSchema);
