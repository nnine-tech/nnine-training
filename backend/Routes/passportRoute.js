const express = require("express");
const router = express.Router();
const passportController = require("./../Controller/passportController");
const passport = require("passport");
require("./../services/passportConfig");

router.use(passport.initialize());
router.use(passport.session());

router.get("/", passportController.loadAuth);
router.get(
  "/google",
  passport.authenticate("google", { scope: ["email", "profile"] })
);
router.get(
  "/google/callback",
  passport.authenticate("google", {
    successRedirect: "/api/v1/auth/success",
    failureRedirect: "/api/v1/auth//failure",
  })
);

router.get("/success", passportController.successGoogleLogin);
router.get("/failure", passportController.failureGoogleLogin);

module.exports = router;
