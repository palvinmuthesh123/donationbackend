const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    amount: { type: Number, required: true },
    campaignId: { type: mongoose.Schema.Types.ObjectId, ref: "Campaign", required: true },
    checkoutLinks: {
      directLink: { type: String },
      embedCode: { type: String },
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Product", ProductSchema);
