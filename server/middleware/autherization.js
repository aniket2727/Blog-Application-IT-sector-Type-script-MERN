



// authMiddleware.js
const jwt = require('jsonwebtoken');

const authenticateToken = (req, res, next) => {
  const token = req.headers.authorization;

  if (!token) {
    return res.status(401).json({ error: 'Unauthorized: Missing token' });
  }

  // Check if the token starts with "Bearer "
  if (!token.startsWith('Bearer ')) {
    return res.status(401).json({ error: 'Unauthorized: Invalid token format' });
  }

  const authToken = token.split(' ')[1];

  jwt.verify(authToken, 'your-secret-key', (err, user) => {
    if (err) {
      return res.status(403).json({ error: 'Forbidden: Invalid token' });
    }

    // Attach the user object to the request for further use in routes
    req.user = user;
    next();
  });
};

module.exports = authenticateToken;
