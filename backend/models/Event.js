const mongoose = require("mongoose");

const eventSchema = new mongoose.Schema({
  name: { type: String, required: true },
  destination: { type: String, required: true },
  image: { type: String },
  creator: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "user",
    required: true,
  },
  date: { type: Date, required: true },
  created_at: { type: Date, default: Date.now },
  participants: [
    { user: { type: mongoose.Schema.Types.ObjectId, ref: "user" }, will: [] },
  ],
});

module.exports = mongoose.model("event", eventSchema);
