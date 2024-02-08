



const express = require('express');
const router = express.Router();
const blogController = require('../controller/BlogStorage.Controller');

// Route to create a new blog entry
router.post('/blogs', blogController.createBlog);

// Route to fetch all blog entries
router.get('/blogs', blogController.getAllBlogs);

// Route to fetch blog entries based on user email
router.get('/blogs/:email', blogController.getBlogByUserEmail);

module.exports = router;
