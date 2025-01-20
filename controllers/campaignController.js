const Campaign = require("../models/Campaign");

exports.createCampaign = async (req, res) => {
  try {
    const { title, description, goal, deadline, organizationId } = req.body;

    const campaign = new Campaign({
      title,
      description,
      goal,
      deadline,
      organizationId,
    });

    await campaign.save();
    res.status(201).json({ message: "Campaign created successfully", campaign });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.updateCampaign = async (req, res) => {
  try {
    const { id } = req.params;
    const updates = req.body;

    const campaign = await Campaign.findByIdAndUpdate(id, updates, { new: true });
    if (!campaign) return res.status(404).json({ message: "Campaign not found" });

    res.status(200).json({ message: "Campaign updated successfully", campaign });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.deleteCampaign = async (req, res) => {
  try {
    const { id } = req.params;

    const campaign = await Campaign.findByIdAndDelete(id);
    if (!campaign) return res.status(404).json({ message: "Campaign not found" });

    res.status(200).json({ message: "Campaign deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.getCampaigns = async (req, res) => {
  try {
    const campaigns = await Campaign.find();
    res.status(200).json(campaigns);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.getCampaignById = async (req, res) => {
  try {
    const { id } = req.params;

    const campaign = await Campaign.findById(id);
    if (!campaign) return res.status(404).json({ message: "Campaign not found" });

    res.status(200).json(campaign);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
