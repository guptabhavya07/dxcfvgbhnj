const express = require("express");
const router = express.Router();

const Post = require("../models/postmodal");

// Add Post
router.post("/createpost", async (req, res) => {
    const posted = req.body;
    try {
        const newPost = new Post(posted);
        await newPost.save();
        res.status(201).send(newPost);
    } catch (error) {
        res.status(400).send({
            success: false,
            message: error.message,
        });
    }
});

// Get all posts
router.get("/showpost", async (req, res, next) => {
    try {
        const posts = await Post.find().sort({ createdAt: -1 }).populate('postedBy', 'name');
        res.status(200).json({
            success: true,
            posts
        });
    } catch (error) {
        next(error);
    }
});

module.exports = Post;
