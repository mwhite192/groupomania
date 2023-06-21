// Purpose: Handles the routes for users
// sets up the user controller
const userCtrl = require('../controllers/user');
// sets up express
const express = require('express');
// sets up the router
const router = express.Router();

// sets up multer middleware
const multer = require('../middleware/multer-config');
// sets up the auth middleware
const auth = require('../middleware/auth');


// sets up the user routes
router.post('/signup', multer,  userCtrl.signup);
router.post('/login', userCtrl.login);
router.put('/userId', auth, multer, userCtrl.update);
router.delete('/:userId', userCtrl.delete);

// exports the router
module.exports = router;