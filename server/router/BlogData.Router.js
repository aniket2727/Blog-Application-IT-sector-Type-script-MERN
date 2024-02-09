






const express = require('express');
const router = express.Router();
const blogController = require('../controller/BlogStorage.Controller');
const authenitications=require('../middleware/autherization')

// Route to create a new blog entry
router.post('/blogs',authenitications,  blogController.createBlog);

// Route to fetch all blog entries
router.get('/blogs', authenitications, blogController.getAllBlogs);

// Route to fetch blog entries based on user email
router.get('/blogs/:email',authenitications, blogController.getBlogByUserEmail);

module.exports = router;
