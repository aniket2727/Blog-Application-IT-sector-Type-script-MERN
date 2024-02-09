



const express = require('express');
const userController = require('../controller/Userinfo.Controller');
const authMiddleware = require('../middleware/autherization');

const router = express.Router();

// Define routes
router.get('/profile', authMiddleware,  userController.getUserProfile);
router.put('/profile', authMiddleware, userController.updateUserProfile);
router.post('/profile', authMiddleware, userController.createUserProfile);

module.exports = router;
