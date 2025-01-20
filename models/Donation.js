const mongoose = require("mongoose");

const DonationSchema = new mongoose.Schema(
  {
    donorId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
    campaignId: { type: mongoose.Schema.Types.ObjectId, ref: "Campaign", required: true },
    amount: { type: Number, required: true },
    paymentDetails: { type: Object, required: true },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Donation", DonationSchema);
