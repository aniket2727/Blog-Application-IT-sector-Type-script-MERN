







// login.controller.js
const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');
const User = require('../database/UserSchema');

router.post('/login', async (req, res) => {
  try {
    const { email, pass } = req.body;
    const user = await User.findOne({ email });
    console.log(user);

    if (!user) {
      return res.status(401).json({ error: 'Invalid credentials' });
    }

    if (pass !== user.pass) {
      return res.status(401).json({ error: 'Invalid credentials' });
    }

    const token = jwt.sign({ userId: user._id, email: user.email }, 'your-secret-key', { expiresIn: '1h' });

    res.cookie('token', token, { httpOnly: true });
    res.status(200).json({ message: 'Login successful', token, id: user._id, email: user.email });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

module.exports = router;
