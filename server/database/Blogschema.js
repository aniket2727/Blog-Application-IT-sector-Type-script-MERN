







const mongoose = require('mongoose');

const blogSchema = new mongoose.Schema({
  userName: {
    type: String,
    required: true
  },
  userEmail: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    default: Date.now
  },
  content: {
    type: String,
    required: true
  }
});

const Blog = mongoose.model('Blog', blogSchema);

module.exports = Blog;
