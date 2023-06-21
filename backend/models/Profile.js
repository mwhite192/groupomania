// Purpose: Defines the user model for MongoDB Atlas
// sets up mongoose for MongoDB Atlas
const mongoose = require('mongoose');

// sets schema for user profile in MongoDB Atlas
const profileSchema = mongoose.Schema({
    userId: { type: String, required: false },
    name: { type: String, required: false },
    formFile: { type: String, required: false },
    formGridEmail: { type: String, required: false },
    formGridPassword: { type: String, required: false },
    formGridPosition: { type: String, required: false },
    formGridPhone: { type: String, required: false },
    formGridWorkOffice: { type: String, required: false },
    formGridCity: { type: String, required: false },
    formGridState: { type: String, required: false },
    formGridZip: { type: String, required: false },
});

// exports the profile model
module.exports = mongoose.model('Profile', profileSchema);

