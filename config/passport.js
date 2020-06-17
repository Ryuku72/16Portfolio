const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;

const db = require("../models");

passport.use(new LocalStrategy(
  {
    usernameField: "email"
  },
  function (email, password, done) {
    db.user.findOrCreate({
      where: {
        email: email
      },
        defaults: {
            password: password
        },
    }).then(function (dbUser) {


      if (!dbUser) {
        return done(null, false, {
          message: "Incorrect email"
        });
      } 
      return done(null, dbUser);
    })
  }
));

passport.serializeUser(function (user, cb) {
  cb(null, user);
});

passport.deserializeUser(function (obj, cb) {
  cb(null, obj);
});

module.exports = passport;