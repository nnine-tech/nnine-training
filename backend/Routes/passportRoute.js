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
    failureFlash: true,
  })
);

router.get("/success", passportController.successGoogleLogin);
router.get("/failure", passportController.failureGoogleLogin);
router.post("/logout", (req, res) => {
  req.logout((err) => {
    if (err) {
      console.error(err);
      return res.redirect("/api/v1/auth");
    }
    res.redirect("/api/v1/auth");
  });
});

module.exports = router;
