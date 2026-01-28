const mongoose = require("mongoose");

const dealSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    description: String,
    category: String,
    partner: String,
    locked: { type: Boolean, default: false },
    eligibility: String,
  },
  { timestamps: true },
);

module.exports = mongoose.model("Deal", dealSchema);
