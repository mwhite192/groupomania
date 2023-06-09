// Purpose: Handles the routes for users
// sets up express
const express = require('express');
// sets up the router
const router = express.Router();
// sets up the user controller
const userCtrl = require('../controllers/user');


// sets up the auth middleware
const auth = require('../middleware/auth');
// sets up multer middleware
const multer = require('../middleware/multer-config');


// sets up the user routes
router.post('/signup', multer,  userCtrl.signup);
router.post('/login', userCtrl.login);
router.get('/users', auth, userCtrl.getAll);
router.put('/userId', auth, multer, userCtrl.update);
router.delete('/:userId', auth, userCtrl.delete);
router.put('/updateTime', auth, userCtrl.updateTime);


// exports the router
module.exports = router;