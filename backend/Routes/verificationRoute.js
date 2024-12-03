const express = require("express");
const router = express.Router();
const verificationController = require("./../Controller/verificationController");
const authController = require("./../Controller/authenticationController");
router
  .route("/")
  .post(authController.protect, verificationController.recoveryVerification);

router
  .route("/verify-email")
  .get(authController.protect, verificationController.verifyEmail);
module.exports = router;
