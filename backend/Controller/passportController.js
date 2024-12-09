const loadAuth = (req, res) => {
  res.send("<a href='/api/v1/auth/google'>Login</a>");
};

const successGoogleLogin = (req, res) => {
  if (!req.isAuthenticated()) res.redirect("failure");
  console.log(req.user.googleLinkStatus);
  res.send("welcome " + (req.user.email || req.user.googleLinkStatus.email));
};

const failureGoogleLogin = (req, res) => {
  res.send("Error");
};

module.exports = { loadAuth, successGoogleLogin, failureGoogleLogin };
