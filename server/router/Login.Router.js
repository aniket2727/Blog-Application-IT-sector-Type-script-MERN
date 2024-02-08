





// login.router.js
const express = require('express');
const router = express.Router();
const loginController = require('../controller/Login.Controller');

router.post('/login', loginController);

module.exports = router;

