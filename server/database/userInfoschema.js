const mongoose = require('mongoose');

const userinfoschema = new mongoose.Schema({
  email: {
    type: String,
    unique: true,
  },
  name: {
    type: String,
    unique: true,
  },
  pass: {
    type: String,
  },
  profilePhoto: {
    type: String,
  },
  about: {
    type: String,
  },
  jobTitle: {
    type: String,
  },
  companyName: {
    type: String,
  },
  birthdate: {
    type: Date,
  },
});

const User = mongoose.model('UserInfo', userinfoschema);
module.exports = User;
