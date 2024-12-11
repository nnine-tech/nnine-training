const flash = require("connect-flash");

const loadAuth = (req, res) => {
  res.send("<a href='/api/v1/auth/google'>Login</a>");
};

const successGoogleLogin = (req, res) => {
  if (!req.isAuthenticated()) res.redirect("failure");
  const email = req.user.email || req.user.googleLinkStatus.email;

  // Dynamically render HTML content
  res.send(`
    <html>
      <head>
        <title>Welcome</title>
      </head>
      <body>
        <h1>Welcome, ${email}!</h1>
        <form action="/api/v1/auth/logout" method="post">
          <a href="/api/v1/course">Get All Courses</a>
          <button type="submit">Logout</button>
        </form>
      </body>
    </html>
  `);
};

const failureGoogleLogin = (req, res) => {
  const errorMessage = req.flash("error")[0];
  res.send(`Authentication failed: ${errorMessage}`);
};

module.exports = { loadAuth, successGoogleLogin, failureGoogleLogin };
