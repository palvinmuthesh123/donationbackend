const mongoose = require("mongoose");

const CampaignSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    description: { type: String, required: true },
    goal: { type: Number, required: true },
    collected: { type: Number, default: 0 },
    deadline: { type: Date, required: true },
    organizationId: { type: mongoose.Schema.Types.ObjectId, ref: "Organization", required: true },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Campaign", CampaignSchema);
