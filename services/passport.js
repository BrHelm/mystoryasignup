const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const FacebookStrategy = require('passport-facebook').Strategy;
const mongoose = require('mongoose');
const keys = require('../config/keys');

const User = mongoose.model('users');

passport.serializeUser((user, done) => {
    done(null, user.id);
});

passport.deserializeUser((id, done) => {
    User.findById(id).then(user => {
            done(null, user);
    });
});

passport.use(
    new GoogleStrategy(
        {
            clientID: keys.googleClientID,
            clientSecret: keys.googleClientSecret,
            callbackURL: '/auth/google/callback',
            proxy: true
        },
        async (accessToken, refreshToken, profile, done) => {
            const existingUser = await User.findOne({ googleId: profile.id });
 
            if (existingUser) {
               return done(null, existingUser);
            }
            
            const user = await new User({ googleId: profile.id }).save();
            done(null, user);
        }
    ), //end of google strategy
);

passport.use(
    new FacebookStrategy(
        {
            clientID: keys.fbClientID,
            clientSecret: keys.fbClientSecret,
            callbackURL: '/auth/facebook/callback',
            proxy: true
        },
        async (accessToken, refreshToken, profile, cb) => {
            const existingUser = await User.findOne({ facebookId: profile.id });

            if (existingUser) {
                return cb(null, existingUser);
            }

            const user = await new User({ facebookId: profile.id, displayName: profile.name, ageRange: profile.age_range, firstName: profile.first_name, lastName: profile.last_name }).save();
            cb(null, user);
        }
    )
);

