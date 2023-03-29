const Post = require("../models/post");

exports.getAllPosts = (req, res, next) => {
  Post.find()
    .populate("author")
    .exec((err, posts) => {
      if (err) return next(err);
      res.render("index", { posts, user: req.user });
    });
};

exports.getPost = (req, res, next) => {
  Post.findById(req.params.id)
    .populate("author")
    .exec((err, post) => {
      if (err) return next(err);
      res.render("post", { post });
    });
};

exports.createPost = (req, res, next) => {
  const post = new Post({
    title: req.body.title,
    content: req.body.content,
    author: req.user._id,
  });
  post.save((err) => {
    if (err) return next(err);
    res.redirect("/");
  });
};
