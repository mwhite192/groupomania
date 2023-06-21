// Description: This file contains the business logic for the user routes
// sets up bcrypt
const bcrypt = require('bcrypt');
// sets up jsonwebtoken
const jwt = require('jsonwebtoken');
// sets up the user model
const User = require('../models/user');
// sets up the profile model
const Profile = require('../models/profile');

// exports the signup function
exports.signup = (req, res, next) => {
  // hashes the password
  bcrypt
    .hash(req.body.registerPassword, 10)
    .then((hash) => {
      // creates a new user
      const user = new User({
        fullName: req.body.fullName,
        registerEmail: req.body.registerEmail,
        registerPassword: hash,
      });
      // saves the user
      user
        .save()
        // returns the user
        // if the user is not saved, returns an error
        .catch((error) => {
          console.log(error);
          res.status(500).json({
            error: "Failed to add user!",
          });
        })
        .then(() => {
          res.status(201).json({
            message: "User added successfully!",
          });
          // sets the url
          const url = req.protocol + "://" + req.get("host");
          // creates a new profile
          const profile = new Profile({
            userId: user._id,
            name: user.fullName,
            formFile: url + "/images/" + req.file.filename,
            formGridEmail: user.registerEmail,
            formGridPassword: user.registerPassword,
            formGridPosition: req.body.formGridPosition,
            formGridPhone: req.body.formGridPhone,
            formGridWorkOffice: req.body.formGridWorkOffice,
            formGridCity: req.body.formGridCity,
            formGridState: req.body.formGridState,
            formGridZip: req.body.formGridZip,
          });
          // returns saved profile
          return profile.save();
        })
        // if the profile is not saved, returns an error
        .catch((error) => {
          console.log(error);
          res.status(500).json({
            error: "Failed to add profile!",
          });
        });
    })
    // if the password is not hashed, returns an error
    .catch((error) => {
      res.status(500).json({
        error: "Failed to encrypt password!",
      });
    });
};

// exports the login function
exports.login = async (req, res, next) => {
  // finds the user by email
  User.findOne({ registerEmail: req.body.email })
    // returns the user
    .then((user) => {
      // checks if the user exists
      if (!user) {
        // returns the error if the user does not exist
        return res.status(401).json({
          error: new Error("User not found!"),
        });
      }
      // compares the password
      bcrypt
        .compare(req.body.password, user.registerPassword)
        // returns the password
        .then( async (valid) => {
          // checks if the password is valid
          if (!valid) {
            // returns the error if the password is not valid
            return res.status(401).json({
              error: new Error("Incorrect password!"),
            });
          }
          // finds the profile by user id
          const profile = await Profile.findOne({ userId: user._id });
          // sets the token to expire in 24 hours
          const token = jwt.sign(
            // sets the payload
            {userId: user._id}, 
            'RANDOM_TOKEN_SECRET',
            {expiresIn: '24h'});
          // returns the token, user id, and profile
          res.status(200).json({
            ...profile._doc,
            userId: user._id,
            token: token,
          });
        })
        // returns the error if the password is not valid
        .catch((error) => {
          res.status(500).json({
            error: "Password does not match!",
          });
        });
    })
    // returns the error if the user is not found
    .catch((error) => {
      res.status(500).json({
        error: 'User not found!',
      });
    });
};

// exports the update profile function
exports.update = (req, res, next) => {
  // sets the url
  const url = req.protocol + '://' + req.get('host');
  // creates a update profile object
  const updateProfile = { ...req.body};
  // checks if the is an image
  if (req.file) {
    // sets the image path
    updateProfile.formFile = url + '/images/' + req.file.filename;
  }
  // updates the profile
  Profile.updateOne({ userId: req.body.userId }, updateProfile)
    // returns the profile
    .then(() => {
      res.status(201).json(updateProfile);
    })
    // returns the error if the profile is not updated
    .catch((error) => {
      res.status(500).json({
        error: 'Failed to update profile!',
      });
    });
};

// exports the delete user function
exports.delete = async (req, res, next) => {
  // finds the user by user email
  const user = await User.findOne({ registerEmail: req.params.userId })
  // returns the profile
  .then((user) => user)
  // returns the error if the user is not found
  .catch((error) => {
    console.log('ERROR getting user to delete', error)
  })
  // checks if the user exists
  if (!user) {
    // returns the error if the user does not exist
    return res.status(404).json({
      error: 'User not found!',
    });
  } 
  // checks if the user is authorized to delete user
  if (user.registerEmail !== req.params.userId) {
    // returns the error if the user is not authorized
    return res.status(401).json({
      error: new Error('User not authorized!')
    });
  }
  // deletes the user
  User.deleteOne({ registerEmail: req.params.userId })
    // returns message is user is deleted successfully
    .then(() => {
      res.status(200).json({
        message: 'User deleted successfully!'
      });
    })
    // returns the error if the user is not deleted
    .catch((error) => {
      res.status(400).json({
        error: 'Failed to delete profile!'
      });
    })
};