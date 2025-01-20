const Donation = require("../models/Donation");

exports.makeDonation = async (req, res) => {
  try {
    const { donorId, campaignId, amount, paymentDetails } = req.body;

    const donation = new Donation({
      donorId,
      campaignId,
      amount,
      paymentDetails,
    });

    await donation.save();
    res.status(201).json({ message: "Donation made successfully", donation });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.getDonations = async (req, res) => {
  try {
    const donations = await Donation.find().populate("donorId campaignId");
    res.status(200).json(donations);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.getDonationById = async (req, res) => {
  try {
    const { id } = req.params;

    const donation = await Donation.findById(id).populate("donorId campaignId");
    if (!donation) return res.status(404).json({ message: "Donation not found" });

    res.status(200).json(donation);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
