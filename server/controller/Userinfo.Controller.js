


const User = require('../database/userInfoschema');

const redis = require('redis');
const client = redis.createClient();

// ...

exports.getUserProfile = async (req, res) => {
  try {
    // Get email from the query string
    const userEmail = req.query.email;

    // Check if email is provided
    if (!userEmail) {
      return res.status(400).json({ error: 'Email parameter is required in the query string' });
    }

    // Check if the data is already cached in Redis
    client.get(userEmail, async (err, cachedProfile) => {
      if (err) {
        console.error('Error checking Redis cache:', err);
      }

      if (cachedProfile) {
        // If cached data is found, return it
        const userProfile = JSON.parse(cachedProfile);
        res.json(userProfile);
      } else {
        // If not found in cache, fetch from the database
        const userProfile = await User.findOne({ email: userEmail }).select(
          'email name profilePhoto about jobTitle companyName birthdate'
        );

        // Check if user profile is found
        if (!userProfile) {
          return res.status(404).json({ error: 'User not found' });
        }

        // Cache the data in Redis for future requests
        client.setex(userEmail, 3600, JSON.stringify(userProfile)); // Set expiration time to 1 hour

        res.json(userProfile);
      }
    });
  } catch (error) {
    console.error('Error fetching user profile:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

// Update user profile data using email
exports.updateUserProfile = async (req, res) => {
    try {
        // Assuming you have user email stored in req.user from authentication middleware
        const userEmail = req.user.email;

        const updatedProfileData = req.body;

        // Update user profile data in the database based on email
        const updatedUser = await User.findOneAndUpdate({ email: userEmail }, updatedProfileData, {
            new: true, // Return the updated document
            runValidators: true, // Run validators for updated fields
        });

        res.json(updatedUser);
    } catch (error) {
        console.error('Error updating user profile:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};

// Create new user profile
exports.createUserProfile = async (req, res) => {
    try {
        const newUserProfile = await User.create(req.body);
        res.status(201).json(newUserProfile);
    } catch (error) {
        console.error('Error creating user profile:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};
