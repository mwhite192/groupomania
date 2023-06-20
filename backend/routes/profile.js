// sets up express
const express = require('express');
// sets up router
const router = express.Router();
// sets up the profile controller
const profileCtrl = require('../controllers/profile');

// sets up the middleware
// const multer = require('../middleware/multer-config');


// sets up the routes
router.get('/', profileCtrl.getProfile); // multer,
// router.put('/user', profileCtrl.updateProfile); // auth, multer,
// router.delete('/:userId', profileCtrl.deleteProfile); // auth,
  
// exports router for routes
module.exports = router;