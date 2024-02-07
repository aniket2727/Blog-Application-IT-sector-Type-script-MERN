



// login.router.js
const express = require('express');
const router = express.Router();
const registerController = require('../controller/Register.Controller');

router.post('/register', registerController);

module.exports = router;

