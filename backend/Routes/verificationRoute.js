const express = require("express");
const router = express.Router();
const verificationController = require("./../Controller/verificationController");
const authController = require("./../Controller/authenticationController");
router
  .route("/email-verification")
  .post(
    authController.protect,
    verificationController.recoveryEmailVerification
  );

router
  .route("/verify-email")
  .get(authController.protect, verificationController.verifyEmail);
module.exports = router;
