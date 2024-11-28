const express = require("express");
const adminController = require("./../Controller/adminController");
const authController = require("./../Controller/authenticationController");
const router = express.Router();

router.post("/forgotPassword", authController.forgotPassword);
router.patch("/resetPassword/:token", authController.resetPassword);
router.patch(
  "/updateMyPassword",
  authController.protect,
  authController.updatePassword
);
router.patch(
  "/updateMe",
  authController.protect,
  adminController.uploadUserPhoto,
  adminController.updateMe
);
router.delete("/deleteMe", authController.protect, adminController.deleteMe);
router.get(
  "/getAllAdmins",
  authController.protect,
  authController.restrictTo("super-admin"),
  adminController.getAllAdmin
);
router.post("/login-admin", authController.login);

router.post(
  "/create-admin",
  authController.protect,
  authController.restrictTo("super-admin"),
  authController.createAdmin
);

router
  .route("/:id")
  .get(
    authController.protect,
    authController.restrictTo("super-admin"),
    adminController.getAdmin
  )
  .delete(
    authController.protect,
    authController.restrictTo("super-admin"),
    adminController.deleteAdmin
  )
  .patch(
    authController.protect,
    authController.restrictTo("super-admin"),
    adminController.updateAdmin
  );

module.exports = router;
