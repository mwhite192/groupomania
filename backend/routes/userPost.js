// sets up Express
const express = require('express');
// sets up the router
const router = express.Router();
// sets up the post controller
const userPostCtrl = require('../controllers/userPost');

// sets up multer middleware
const multer = require('../middleware/multer-config');


// sets up the routes
router.post('/create', userPostCtrl.createPost);
router.get('/all', userPostCtrl.getAllPosts);
router.get('/:id', userPostCtrl.getOnePost);
router.put('/:id', multer, userPostCtrl.updatePost);
router.delete('/:id', userPostCtrl.deletePost);