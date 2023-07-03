// Purpose: Handles the routes for comments
// sets up express
const express = require('express');
// sets up the router
const router = express.Router();
// sets up the post controller
const commentsCtrl = require('../controllers/comments');

// sets up multer middleware
const multer = require('../middleware/multer-config');
// sets up the auth middleware
const auth = require('../middleware/auth');


// sets up the posts' routes
router.post('/create', auth, multer, commentsCtrl.createComment);
router.get('/all', auth, commentsCtrl.getAllComments);
router.put('/:_id', auth, multer, commentsCtrl.updateComment);
router.delete('/:_id', auth, commentsCtrl.deleteComment);
router.post('/:_id/likes', commentsCtrl.likeComments);

// exports the router
module.exports = router;