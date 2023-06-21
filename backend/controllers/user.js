// Description: This file contains the logic for the user authentication
// sets up bcrypt
const bcrypt = require('bcrypt');
// sets up jsonwebtoken
const jwt = require('jsonwebtoken');
// sets up the user model
const User = require('../models/user');
// sets up the profile model
const Profile = require('../models/Profile');

// exports the signup function
exports.signup = (req, res, next) => {
  // hashes the password
  bcrypt.hash(req.body.registerPassword, 10).then((hash) => {
    // sets the user
    const user = new User({
      fullName: req.body.fullName,
      registerEmail: req.body.registerEmail,
      registerPassword: hash,
    });
    // saves the user
    user
      .save()
      // returns the user
      .then(() => {
        res.status(201).json({
          message: 'User added successfully!',
        });
        // sets the url
        const url = req.protocol + '://' + req.get('host');
        // sets the profile
        const profile = new Profile({
          userId: user._id,
          name: user.fullName,
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
        return profile.save();
      })
      .catch((error) => {
        console.log(error);
        res.status(500).json({
          error: 'Failed to add user!'  ,
        });
      })
  }).catch((error) => {
    res.status(500).json({
      error: 'Failed to encrypt password!',
    });
  });
}

// exports the login function
exports.login = async (req, res, next) => {
  // finds the user by email
  User.findOne({ registerEmail: req.body.email })
    // returns the user
    .then((user) => {
      // checks if the user exists
      if (!user) {
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
            // returns the error
            return res.status(401).json({
              error: new Error("Incorrect password!"),
            });
          }
          const profile = await Profile.findOne({ userId: user._id });
          // sets the token
          const token = jwt.sign(
            // sets the payload
            {userId: user._id}, 
            'RANDOM_TOKEN_SECRET',
            {expiresIn: '24h'});
          // returns the token
          res.status(200).json({
            ...profile._doc,
            userId: user._id,
            token: token,
          });
        })
        .catch((error) => {
          res.status(500).json({
            error: "Password does not match!",
          });
        });
    })
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
  // sets the profile
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
    .catch((error) => {
      res.status(500).json({
        error: 'Failed to update profile!',
      });
    });
};

// exports the delete profile function
exports.delete = (req, res, next) => {
  // finds the profile by user id
  Profile.findOne({ userId: req.body.userId })
  .then((Profile) => {
      //checks if the profile exists
      if(!Profile){
        // returns the error
        return res.status(401).json({
          error: new Error("Profile not found!"),
        });
      }
    });
  // checks if the user is authorized to delete profile
  if (Profile.userId !== req.body.userId) {
    return res.status(401).json({
      error: new Error('User not authorized!')
    });
  }
  // deletes the profile
  Profile.deleteOne({ userId: req.body.userId })
    // returns the success message
    .then(() => {
      res.status(200).json({
        message: 'Profile deleted successfully!'
      });
    })
    .catch((error) => {
      res.status(400).json({
        error: 'Failed to delete profile!'
      });
    })
};