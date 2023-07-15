// Description: This file contains the business logic for the user routes
// sets up bcrypt
const bcrypt = require('bcrypt');
// sets up jsonwebtoken
const jwt = require('jsonwebtoken');
// sets up the user model
const User = require('../models/users');
// sets up the profile model
const Profile = require('../models/profiles');


// exports the signup function
exports.signup = (req, res, next) => {
  // hashes the password
  bcrypt
    .hash(req.body.registerPassword, 10)
    .then((hash) => {
      // creates a new user
      const user = new User({
        name: req.body.name,
        registerEmail: req.body.registerEmail,
        registerPassword: hash,
        timestamp: Date.now(),
      });
      // saves the user
      user
        .save()
        // if the user is not saved, returns an error
        .catch((error) => {
          res.status(501).json({
            error: 'failed to save user!',
          });
        })
        // returns success message if the user is saved
        .then(() => {
          res.status(201).json({
            message: 'user added successfully!',
          });
          // sets the url for the image
          const url = req.protocol + '://' + req.get('host');
          // creates a new user profile
          const profile = new Profile({
            userId: user._id,
            name: user.name,
            formFile: url + '/images/' + req.file.filename,
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
          res.status(501).json({
            error: 'failed to save profile!',
          });
        });
    })
    // if the password is not hashed, returns an error
    .catch((error) => {
      res.status(501).json({
        error: 'failed to encrypt password!',
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
          error: 'user not found!',
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
              error: 'incorrect password!',
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
          // returns the token, user id, user, and profile
          res.status(200).json({
            ...profile._doc,
            ...user._doc,
            userId: user._id,
            token: token,
          });
        })
        // returns the error if the password is not valid
        .catch((error) => {
          res.status(500).json({
            error: 'password does not match!',
          });
        });
    })
    // returns the error if the user is not found
    .catch((error) => {
      res.status(500).json({
        error: 'user not found!',
      });
    });
};


// exports the get all users function
exports.getAll = (req, res, next) => {
  // finds all users
  Profile.find()
    // returns the users
    .then((profiles) => {
      res.status(200).json(profiles);
    })
    // returns the error if the users are not found
    .catch((error) => {
      res.status(400).json({
        error: 'users not found!',
      });
    });
};


// exports the update profile function
exports.update = (req, res, next) => {
  // sets the url for the image
  const url = req.protocol + '://' + req.get('host');
  // creates a update profile object
  const updateProfile = { ...req.body};
  // checks if the is an image
  if (req.file) {
    // sets the image path for the profile
    updateProfile.formFile = url + '/images/' + req.file.filename;
  }
  // updates the profile
  Profile.updateOne({ userId: req.body.userId }, updateProfile)
    // returns the updated profile
    .then(() => {
      res.status(201).json(updateProfile);
    })
    // returns the error if the profile is not updated
    .catch((error) => {
      res.status(501).json({
        error: 'failed to update profile!',
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
      res.status(400).json({
      error: 'user not found!',  
    });
  });
  // checks if the user exists
  if (!user) {
    // returns the error if the user does not exist
    return res.status(404).json({
      error: 'user not found!',
    });
  } 
  // checks if the user is authorized to delete user
  if (user.registerEmail !== req.params.userId) {
    // returns the error if the user is not authorized
    return res.status(401).json({
      error: 'user not authorized!',
    });
  }
  // finds the user by email and deletes the user
  User.deleteOne({ registerEmail: req.params.userId })
    // returns message if user is deleted successfully
    .then(() => {
      res.status(200).json({
        message: 'user deleted successfully!'
      });
    })
    // returns the error if the user is not deleted
    .catch((error) => {
      res.status(400).json({
        error: 'failed to delete user!'
      });
    })
};


// exports the update time function
exports.updateTime = (req, res, next) => {
  // checks if the user exists
  if (!req.body.userId) {
    // returns the error if the user does not exist
    return res.status(400).json({
      error: 'user not found!',
    });
  } 
  // finds the user by user id
  User.findOne({ _id: req.body.userId })
    // returns the user
    .then((user) => {
      // checks if the user exists
      if (!user) {
        // returns the error if the user does not exist
        return res.status(404).json({
          error: 'user not found!',
        });
      }
      // sets the timestamp variable to the current time
      const timestamp = { timestamp: Date.now() }
      // finds the user by user id and updates the timestamp
      User.updateOne({ _id: req.body.userId }, timestamp)
        // returns the updated user
        .then(() => {
          res.status(201).json({...user._doc});
        })
        // returns the error if the user is not updated
        .catch((error) => {
          res.status(500).json({
            error: 'failed to update user timestamp!',
          });
        });
    })
};