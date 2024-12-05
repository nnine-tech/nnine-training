const express = require("express");
const router = express.Router();
const passportController = require("./../Controller/passportController");
const passport = require("passport");
require("./../services/passportConfig");

router.use(passport.initialize());
router.use(passport.session());

router.get("/", passportController.loadAuth);
router.get(
  "/api/v1/auth/google",
  passport.authenticate("google", { scope: ["email", "profile"] })
);
router.get(
  "/api/v1/auth/google/callback",
  passport.authenticate("google", {
    successRedirect: "/success",
    failureRedirect: "/failure",
  })
);

router.get("/success", passportController.successGoogleLogin);
router.get("/failure", passportController.failureGoogleLogin);

module.exports = router;
