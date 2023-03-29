const express = require("express");
const router = express.Router();
const postController = require("../controllers/postController");

// Get all posts
router.get("/", postController.getAllPosts);

// Get a specific post
router.get("/:id", postController.getPost);

// Create a new post
router.post("/", postController.createPost);

module.exports = router;
