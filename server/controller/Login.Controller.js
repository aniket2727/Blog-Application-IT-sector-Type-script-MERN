const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');
const redis = require('redis');
const User = require('../database/UserSchema');

const client = redis.createClient();

router.post('/login', async (req, res) => {
  try {
    const { email, pass } = req.body;

    // Check if the user data is already cached in Redis
    client.get(email, async (err, cachedUser) => {
      if (err) {
        console.error('Error checking Redis cache:', err);
      }

      if (cachedUser) {
        // If cached data is found, validate the password and generate a token
        const user = JSON.parse(cachedUser);

        if (pass !== user.pass) {
          return res.status(401).json({ error: 'Invalid credentials' });
        }

        const token = jwt.sign({ userId: user._id, email: user.email }, 'your-secret-key', { expiresIn: '1h' });

        res.cookie('token', token, { httpOnly: true });
        res.status(200).json({ message: 'Login successful', token, id: user._id, email: user.email });
      } else {
        // If not found in cache, fetch from the database
        const user = await User.findOne({ email });

        if (!user) {
          return res.status(401).json({ error: 'Invalid credentials' });
        }

        // Cache the user data in Redis for future requests
        client.setex(email, 3600, JSON.stringify(user)); // Set expiration time to 1 hour

        if (pass !== user.pass) {
          return res.status(401).json({ error: 'Invalid credentials' });
        }

        const token = jwt.sign({ userId: user._id, email: user.email }, 'your-secret-key', { expiresIn: '1h' });

        res.cookie('token', token, { httpOnly: true });
        res.status(200).json({ message: 'Login successful', token, id: user._id, email: user.email });
      }
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

module.exports = router;
