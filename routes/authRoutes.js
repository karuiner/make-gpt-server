const express = require("express");
const router = express.Router();
const passport = require("passport");
const jwt = require("jsonwebtoken");
const authController = require("../controllers/authController");

// Login route
router.post("/login", authController.login);

// Register route
router.post("/register", (req, res) => {
  res.send("Register");
});

// Logout route
router.get("/logout", (req, res) => {
  req.logout();
  res.redirect("/");
});

module.exports = router;
