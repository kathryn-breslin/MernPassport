const User = require("../../../../models/User");
const LocalStrategy = require("passport-local").Strategy;

const strategy = new LocalStrategy({
    usernameField: "username"
}, function(username, password, done) {
    User.findOne({ username: username }, (err, user) => {
        if (err) {
            return done (err)
        }
        if (!user) {
            return done (null, false, { message: "Incorrect Username"})
        }
        if (!user.checkPassword(password)){
            return done (null, false, { message: "Incorrect Password"})
        }
        return done (null, user)
    })
})

module.exports = strategy;