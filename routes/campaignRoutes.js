const express = require("express");
const { 
  createCampaign, 
  updateCampaign, 
  deleteCampaign, 
  getCampaigns, 
  getCampaignById 
} = require("../controllers/campaignController");
const { campaignValidator } = require("../utils/validators");

const router = express.Router();

// Create a new campaign
router.post("/", campaignValidator, createCampaign);

// Update an existing campaign
router.put("/:id", campaignValidator, updateCampaign);

// Delete a campaign
router.delete("/:id", deleteCampaign);

// Get all campaigns
router.get("/", getCampaigns);

// Get a campaign by ID
router.get("/:id", getCampaignById);

module.exports = router;
