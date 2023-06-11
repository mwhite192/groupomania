// sets up the user controller
const userCtrl = require('../controllers/user');
// sets up Express
const express = require('express');
// sets up the router
const router = express.Router();

// sets up the signup and login route
router.post('/signup', userCtrl.signup);
router.post('/login', userCtrl.login);

// exports the router
module.exports = router;