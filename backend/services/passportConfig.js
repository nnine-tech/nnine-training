const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth2").Strategy;
const dotenv = require("dotenv");
const Admin = require("./../Model/newAdminModel");
const catchAsync = require("../Utils/catchAsync");
dotenv.config({
  path: "./config.env",
});

passport.use(
  new GoogleStrategy(
    {
      clientID: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      callbackURL: "http://localhost:8000/api/v1/auth/google/callback",
      passReqToCallback: true,
      access_type: "offline",
    },

    async (request, accessToken, refreshToken, profile, done) => {
      try {
        const email = profile.emails[0].value;
        const emailVerified = profile.email_verified;

        let googleAdmin = await Admin.findOne({
          "googleLinkStatus.email": email,
        });
        if (googleAdmin) return done(null, googleAdmin);

        //FIND EXISITING ADMIN
        let admin = await Admin.findOne({ email });

        if (admin) {
          if (!admin.googleLinkStatus?.googleId)
            //EMAIL EXIST BUT GOOGLE ID IS NOT LINKED
            //RETURN COULD BE REMOVED IN FUTURE
            return done(null, false, {
              message:
                "Looks like this account has been used already. Please login and link your google account",
            });
          return done(null, admin);
        }

        if (emailVerified) {
          const admin = new Admin({
            googleLinkStatus: {
              googleId: profile.id,
              name: profile.DisplayName,
              email: profile.emails[0].value,
              profilePic: profile.photos[0].value,
              accessToken,
              refreshToken,
            },
          });
          await admin.save({ validateBeforeSave: false });
          console.log(profile);
          return done(null, admin);
        } else {
          return done(null, false, {
            message: "Email not verified by Google.First verify your email",
          });
        }
      } catch (error) {
        return done(error, null);
      }
    }
  )
);
passport.serializeUser((user, done) => {
  console.log(user);
  done(null, user._id);
});
passport.deserializeUser(async (id, done) => {
  try {
    const admin = await Admin.findById(id);
    done(null, admin);
  } catch (error) {
    console.error("Error during user deserialization", error);
    done(error);
  }
});
