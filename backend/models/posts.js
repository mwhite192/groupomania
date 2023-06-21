// sets up mongoose for MongoDB Atlas
const mongoose = require('mongoose');

// sets schema for posts in MongoDB Atlas
const postsSchema = mongoose.Schema({
    userId: { type: String, required: true },
    name: { type: String, required: true },
    image: { type: String, required: false },
    message: { type: String, max:500, required: true },
    timestamp: { type: String, required: true },
    likes: { type: Array, required: false },
    dislikes: { type: Array, required: false },
    comments: { type: Array, required: false },
});

// exports the post model
module.exports = mongoose.model('UserPost', postsSchema);