// Purpose: Handles the routes for posts
// sets up express
const express = require('express');
// sets up the router
const router = express.Router();
// sets up the post controller
const postsCtrl = require('../controllers/posts');


// sets up the auth middleware
const auth = require('../middleware/auth');
// sets up multer middleware
const multer = require('../middleware/multer-config');


// sets up the posts' routes
router.post('/create', auth, multer, postsCtrl.createPost);
router.get('/all', auth, postsCtrl.getAllPosts);
router.put('/:_id', auth, multer, postsCtrl.updatePost);
router.delete('/:_id', auth, postsCtrl.deletePost);
router.post('/:_id/likes', auth, postsCtrl.likePosts);
router.post('/:_id/comments', auth, postsCtrl.commentPosts);
router.put('/:_id/comments/:commentId', auth, postsCtrl.updateComment);
router.delete('/:_id/comments/:commentId', auth, postsCtrl.deleteComment);
router.post('/:_id/comments/:commentId/likes', auth, postsCtrl.likeComment);


// exports the router
module.exports = router;