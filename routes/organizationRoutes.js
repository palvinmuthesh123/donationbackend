const express = require("express");
const { 
  createOrganization, 
  getOrganizations, 
  getOrganizationById, 
  updateOrganization, 
  deleteOrganization 
} = require("../controllers/organizationController");
const { organizationValidator } = require("../utils/validators");

const router = express.Router();

// Create a new organization
router.post("/", organizationValidator, createOrganization);

// Get all organizations
router.get("/", getOrganizations);

// Get an organization by ID
router.get("/:id", getOrganizationById);

// Update an organization by ID
router.put("/:id", organizationValidator, updateOrganization);

// Delete an organization by ID
router.delete("/:id", deleteOrganization);

module.exports = router;
