const Organization = require("../models/Organization");

// Create a new organization
exports.createOrganization = async (req, res) => {
  try {
    const newOrganization = new Organization(req.body);
    const savedOrganization = await newOrganization.save();
    res.status(201).json(savedOrganization);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get all organizations
exports.getOrganizations = async (req, res) => {
  try {
    const organizations = await Organization.find();
    res.status(200).json(organizations);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get an organization by ID
exports.getOrganizationById = async (req, res) => {
  try {
    const organization = await Organization.findById(req.params.id);
    if (!organization) return res.status(404).json({ message: "Organization not found" });
    res.status(200).json(organization);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Update an organization by ID
exports.updateOrganization = async (req, res) => {
  try {
    const updatedOrganization = await Organization.findByIdAndUpdate(
      req.params.id,
      { $set: req.body },
      { new: true }
    );
    if (!updatedOrganization) return res.status(404).json({ message: "Organization not found" });
    res.status(200).json(updatedOrganization);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Delete an organization by ID
exports.deleteOrganization = async (req, res) => {
  try {
    const deletedOrganization = await Organization.findByIdAndDelete(req.params.id);
    if (!deletedOrganization) return res.status(404).json({ message: "Organization not found" });
    res.status(200).json({ message: "Organization deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
