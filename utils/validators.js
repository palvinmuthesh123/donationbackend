const { body, validationResult } = require("express-validator");

// Utility for Validation Result
const validateRequest = (rules) => [
  ...rules,
  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    next();
  },
];

// User Validators
const userRegistrationValidator = validateRequest([
  body("name").notEmpty().withMessage("Name is required"),
  body("email").isEmail().withMessage("Invalid email address"),
  body("password")
    .isLength({ min: 6 })
    .withMessage("Password must be at least 6 characters long"),
  body("phone")
    .isMobilePhone()
    .withMessage("Invalid phone number")
    .optional(),
]);

const userLoginValidator = validateRequest([
  body("email").isEmail().withMessage("Invalid email address"),
  body("password").notEmpty().withMessage("Password is required"),
]);

// Campaign Validators
const campaignValidator = validateRequest([
  body("title").notEmpty().withMessage("Campaign title is required"),
  body("description").notEmpty().withMessage("Campaign description is required"),
  body("goal")
    .isNumeric()
    .withMessage("Campaign goal must be a number")
    .custom((value) => value > 0)
    .withMessage("Campaign goal must be greater than 0"),
  body("deadline")
    .optional()
    .isISO8601()
    .withMessage("Invalid deadline date"),
]);

// Product Validators
const productValidator = validateRequest([
  body("name").notEmpty().withMessage("Product name is required"),
  body("amount")
    .isNumeric()
    .withMessage("Amount must be a number")
    .custom((value) => value > 0)
    .withMessage("Amount must be greater than 0"),
  body("campaignId").notEmpty().withMessage("Campaign ID is required"),
]);

// Donation Validators
const donationValidator = validateRequest([
  body("donorName").notEmpty().withMessage("Donor name is required"),
  body("email").isEmail().withMessage("Invalid email address").optional(),
  body("phone")
    .isMobilePhone()
    .withMessage("Invalid phone number")
    .optional(),
  body("amount")
    .isNumeric()
    .withMessage("Donation amount must be a number")
    .custom((value) => value > 0)
    .withMessage("Donation amount must be greater than 0"),
  body("campaignId").notEmpty().withMessage("Campaign ID is required"),
]);

// Organization Validators
const organizationValidator = validateRequest([
  body("name").notEmpty().withMessage("Organization name is required"),
  body("phone").notEmpty().withMessage("Phone number is required"),
  body("email").isEmail().withMessage("Valid email is required"),
  body("website")
    .optional()
    .isURL()
    .withMessage("Invalid URL format for website"),
  body("bankDetails.accountNumber")
    .optional()
    .isNumeric()
    .withMessage("Account number must be numeric"),
  body("bankDetails.ifscCode")
    .optional()
    .isAlphanumeric()
    .withMessage("Invalid IFSC code format"),
]);

// Export Validators
module.exports = {
  userRegistrationValidator,
  userLoginValidator,
  campaignValidator,
  productValidator,
  donationValidator,
  organizationValidator,
};