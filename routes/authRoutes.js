const express = require("express");
const { register, login } = require("../controllers/authController");
const { userRegistrationValidator, userLoginValidator } = require("../utils/validators");

const router = express.Router();

router.post("/register", userRegistrationValidator, register);
router.post("/login", userLoginValidator, login);

module.exports = router;