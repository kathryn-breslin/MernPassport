const express = require("express");
const router = express.Router();
const User = require("../models/User");
const passport = require("../client/src/utils/passport")

router.post("/", (req, res) => {
  console.log("user signup");

  const { username, password } = req.body;

  User.findOne({ username: username }, (err, user) => {
    if (err) {
      console.log("Error in post: " + err);
    } else if (user) {
      console.log("Username already exists");
    } else {
      const newUser = new User({
        username: username,
        password: password
      });

      newUser.save((err, savedUser) => {
        if (err) return res.json(err);
        res.json(savedUser);
      });
    }
  });
});

router.post(
  "/login",
  function(req, res, next) {
    console.log("routes/user.js, login, req.body: ");
    console.log(req.body);
    next();
  },
  passport.authenticate("local"),
  (req, res) => {
    console.log("logged in", req.user);

    var userInfo = {
      username: req.user.username
    };

    res.send(userInfo);
  }
);

router.get("/", (req, res, next) => {
  console.log("User");
  console.log(req.user);

  if (req.user) {
    res.json({ user: req.user });
  } else {
    res.json({ user: null });
  }
});

router.post("/logout", (req, res) => {
  if (req.user) {
    res.logout();
    res.send({ msg: "logging out " });
  } else {
    res.send({ msg: "no user to log out " });
  }
});

module.exports = router;
