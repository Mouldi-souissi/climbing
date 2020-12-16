const mongoose = require("mongoose");

const eventSchema = new mongoose.Schema({
  name: { type: String, required: true },
  price: { type: Number, required: true },
  destination: { type: String, required: true },
  description: { type: String },
  image: { type: String },
  creator: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "user",
    required: true,
  },
  date: { type: Date, required: true },
  created_at: { type: Date, default: Date.now },
  completed: {
    type: Boolean,
    default: function () {
      return this.date.getTime() <= Date.now();
    },
  },
  participants: [
    {
      user: { type: mongoose.Schema.Types.ObjectId, ref: "user" },
      will: "",
    },
  ],
  rating: {
    raters: { type: Number, default: 0 },
    total: { type: Number, default: 0 },
    result: { type: Number, default: 0 },
  },
});

module.exports = mongoose.model("event", eventSchema);
