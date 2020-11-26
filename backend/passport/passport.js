const FacebookStrategy = require("passport-facebook").Strategy;
const passport = require("passport");
const User = require("../models/User");

// facebook

passport.serializeUser((user, cb) => {
  cb(null, user);
});

passport.deserializeUser((user, cb) => {
  cb(null, user);
});

module.exports = (passport) => {
  passport.use(
    new FacebookStrategy(
      {
        clientID: "561395128053548",
        clientSecret: "dba71aa47526953efec0fcb8d8d39d45",
        callbackURL: "http://localhost:3000/auth/facebook/callback",
      },
      function (accessToken, refreshToken, profile, cb) {
        User.findOrCreate({ facebookId: profile.id }, function (err, user) {
          return cb(err, user);
        });
      }
    )
  );
};
