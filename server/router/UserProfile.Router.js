



const express = require('express');
const userController = require('../controller/Userinfo.Controller');
//const authMiddleware = require('../middlewares/authMiddleware');

const router = express.Router();

// Define routes
router.get('/profile', userController.getUserProfile);
router.put('/profile', userController.updateUserProfile);
router.post('/profile', userController.createUserProfile);

module.exports = router;
