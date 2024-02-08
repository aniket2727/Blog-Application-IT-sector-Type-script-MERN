const Blog = require('../database/Blogschema');
const mongoose = require('mongoose');
// Controller to store a new blog entry


exports.createBlog = async (req, res) => {
    try {
      const { userName, userEmail, content } = req.body;
  
      const newBlog = new Blog({
        userName,
        userEmail,
        content
      });
  
      const savedBlog = await newBlog.save();
  
      res.status(201).json(savedBlog);
    } catch (error) {
      console.error('Error creating blog entry:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  };



// Controller to fetch all blog entries
exports.getAllBlogs = async (req, res) => {
  try {
    // Find all blog entries in the database
    const allBlogs = await Blog.find();

    if (allBlogs.length === 0) {
      return res.status(404).json({ error: 'No blog entries found' });
    }

    res.json(allBlogs);
  } catch (error) {
    console.error('Error fetching all blog entries:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

// Controller to fetch blog entries based on user email
exports.getBlogByUserEmail = async (req, res) => {
  try {
    const userEmail = req.params.email;

    // Find blog entries with the specified user email
    const blogEntries = await Blog.find({ userEmail });

    if (blogEntries.length === 0) {
      return res.status(404).json({ error: 'No blog entries found for the user' });
    }

    res.json(blogEntries);
  } catch (error) {
    console.error('Error fetching blog entries:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};
