// sets up the user controller
const userCtrl = require('../controllers/user');
// sets up Express
const express = require('express');
// sets up the router
const router = express.Router();

// sets up multer middleware
const multer = require('../middleware/multer-config');


// sets up the signup and login route
router.post('/signup', multer,  userCtrl.signup);
router.post('/login', userCtrl.login);
router.put('/edit', userCtrl.updateProfile);

// exports the router
module.exports = router;