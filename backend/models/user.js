// Purpose: Defines the user model for MongoDB Atlas
// sets up mongoose for MongoDB Atlas
const mongoose = require('mongoose');
// imports mongoose-unique-validator package 
const uniqueValidator = require('mongoose-unique-validator');

// sets schema for user in MongoDB Atlas
const userSchema = mongoose.Schema({
    file: { type: String, required: false },
    name: { type: String, required: true },
    registerEmail: { type: String, required: true, unique: true },
    registerPassword: { type: String, required: true },
    friends: { type: Array, required: false },
});

// uses the unique validator plugin
userSchema.plugin(uniqueValidator);
// exports the user model
module.exports = mongoose.model('User', userSchema);