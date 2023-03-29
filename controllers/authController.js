const jwt = require("jsonwebtoken");
const passport = require("passport");

exports.login = (req, res, next) => {
  passport.authenticate("local", { session: false }, (err, user, info) => {
    if (err || !user) {
      return res.status(400).json({
        message: "Invalid username or password",
      });
    }
    req.login(user, { session: false }, (err) => {
      if (err) {
        res.send(err);
      }
      const token = jwt.sign({ id: user._id }, process.env.SECRET);
      return res.json({ token });
    });
  })(req, res);
};
