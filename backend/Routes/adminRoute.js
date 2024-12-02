const express = require("express");
const upload = require("./../Utils/FileUpload");
const authController = require("./../Controller/authenticationController");
const router = express.Router();
const adminController = require("./../Controller/adminController");

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
  upload.uploadSinglePhoto("photo"),
  upload.imageNameSelector("admin"),
  upload.resizePhoto,
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
  upload.uploadSinglePhoto("photo"),
  upload.imageNameSelector("admin"),
  upload.resizePhoto,
  authController.createAdmin
);

router
  .route("/:id")
  .get(authController.protect, adminController.getAdmin)
  .delete(
    authController.protect,
    authController.restrictTo("super-admin"),
    adminController.deleteAdmin
  )
  .patch(
    authController.protect,
    authController.restrictTo("super-admin"),
    upload.uploadSinglePhoto("photo"),
    upload.imageNameSelector("admin"),
    upload.resizePhoto,
    adminController.updateAdmin
  );

module.exports = router;
