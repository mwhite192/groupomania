// sets up mongoose
const mongoose = require('mongoose');

// sets the schema for the user's post
const userPostSchema = mongoose.Schema({
    userId: { type: String, required: true },
    name: { type: String, required: true },
    message: { type: String, max:500, required: true },
    timestamp: { type: String, required: true },
    image: { type: String, required: false },
    likes: { type: Array, required: false },
    dislikes: { type: Array, required: false },
    comments: { type: Array, required: false },
});

// exports the post model
module.exports = mongoose.model('UserPost', userPostSchema);