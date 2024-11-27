const express = require("express");
const adminController = require("./../Controller/adminController");
const authController = require("./../Controller/authenticationController");
const router = express.Router();

router.post("/forgotPassword", authController.forgotPassword);
router.patch("/resetPassword/:token", authController.resetPassword);

router.post(
  "/create-admin",
  authController.protect,
  authController.restrictTo("super-admin"),
  authController.createAdmin
);

router.post("/login-admin", authController.login);

module.exports = router;
