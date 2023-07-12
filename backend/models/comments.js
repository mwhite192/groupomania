// Purpose: Defines the comments model for MongoDB Atlas
// sets up mongoose for MongoDB Atlas
const mongoose = require('mongoose');


// sets schema for comments in MongoDB Atlas
const commentsSchema = mongoose.Schema({
    postId: { type: String, required: true },
    userId: { type: String, required: true },
    username: { type: String, required: true },
    profilePicture: { type: String, required: false },
    commentText: { type: String, max:500, required: true },
    commentDate: { type: String, required: true },
    likes: { type: Array, required: false },
    usersLiked: { type: Array, required: false },
});


// exports the comments model
module.exports = mongoose.model('Comments', commentsSchema);