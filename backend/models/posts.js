// sets up mongoose for MongoDB Atlas
const mongoose = require('mongoose');

// sets schema for posts in MongoDB Atlas
const postsSchema = mongoose.Schema({
    userId: { type: String, required: true },
    username: { type: String, required: true },
    profilePicture: { type: String, required: false },
    image: { type: String, required: false },
    message: { type: String, max:500, required: true },
    timestamp: { type: String, required: true },
    likes: { type: Array, required: false },
    usersLiked: { type: Array, required: false },
    comments: { type: Array, required: false },
});

// exports the post model
module.exports = mongoose.model('Posts', postsSchema);