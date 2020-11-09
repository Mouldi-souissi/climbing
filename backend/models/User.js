const mongoose = require("mongoose");
const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    min: 6,
    max: 35,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    min: 6,
    max: 35,
  },
  password: {
    type: String,
    required: true,
    min: 6,
    max: 1024,
  },
  date: {
    type: Date,
    default: Date.now,
  },
  avatar: String,
  // profile: { type: mongoose.Schema.Types.ObjectId, ref: "profile" },
});
module.exports = mongoose.model("user", userSchema);
