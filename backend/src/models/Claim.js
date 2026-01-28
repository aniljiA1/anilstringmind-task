const mongoose = require("mongoose");

const claimSchema = new mongoose.Schema(
  {
    user: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
    deal: { type: mongoose.Schema.Types.ObjectId, ref: "Deal" },
    status: {
      type: String,
      enum: ["pending", "approved"],
      default: "pending",
    },
  },
  { timestamps: true },
);

module.exports = mongoose.model("Claim", claimSchema);
