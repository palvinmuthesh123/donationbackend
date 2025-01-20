const mongoose = require("mongoose");

const OrganizationSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    address: { type: String },
    contactPerson: { type: String },
    phone: { type: String, required: true },
    email: { type: String, required: true },
    website: { type: String },
    bankDetails: {
      accountNumber: { type: String },
      ifscCode: { type: String },
      bankName: { type: String },
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Organization", OrganizationSchema);
