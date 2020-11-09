const mongoose = require("mongoose");

const profileSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: "user" },
  sharedPosts: [
    { post: { type: mongoose.Schema.Types.ObjectId, ref: "post" } },
  ],
});

module.exports = mongoose.model("profile", profileSchema);
