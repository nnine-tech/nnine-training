const express = require("express");
const router = express.Router();
const passport = require("passport");

router.get("/", (req, res, next) => {
  res.send("<a href='/api/v1/auth/google'>Login with Google</a>");
});

router.get(
  "/google",
  passport.authenticate("google", { scope: ["profile", "email"] })
);

router.get(
  "/google/callback",
  passport.authenticate("google", { failureRedirect: "/" }),
  (req, res) => res.redirect("/profile")
);
router.get("/profile", (req, res, next) => {
  res.send(`Welcome ${req.user.displayName}`);
});

router.get("/logout", (req, res) => {
  req.logOut();
  res.redirect("/");
});

module.exports = router;
