// sets up the user controller
const userCtrl = require('../controllers/user');
// sets up Express
const express = require('express');
// sets up the router
const router = express.Router();

// sets up multer middleware
const multer = require('../middleware/multer-config');


// sets up the routes
router.post('/signup', multer,  userCtrl.signup);
router.post('/login', userCtrl.login);
router.put('/edit', userCtrl.updateProfile);
// router.get('/userProfile', userCtrl.getProfile);

// exports the router
module.exports = router;