const User = require("../models/user");

exports.getUser = (req, res, next) => {
  User.findById(req.params.id, (err, user) => {
    if (err) return next(err);
    res.render("user", { user });
  });
};
