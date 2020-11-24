const mongoose = require("mongoose");

const itemSchema = new mongoose.Schema({
  name: { type: String, required: true },
  price: { type: Number, required: true },
  description: { type: String, required: true },
  pics: [{ type: String }],
  date: {
    type: Date,
    default: Date.now,
  },
  seller: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "user",
  },
});

module.exports = mongoose.model("item", itemSchema);
