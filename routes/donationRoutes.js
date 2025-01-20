const express = require("express");
const { 
  makeDonation, 
  getDonations, 
  getDonationById 
} = require("../controllers/donationController");
const { donationValidator } = require("../utils/validators");

const router = express.Router();

// Make a donation
router.post("/", donationValidator, makeDonation);

// Get all donations
router.get("/", getDonations);

// Get a donation by ID
router.get("/:id", getDonationById);

module.exports = router;
