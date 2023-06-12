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
      file: req.body.image,
      username: req.body.username,
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
        const profile = new Profile({
          userId: user._id,
          formFile: user.file,
          formGridEmail: user.registerEmail,
          formGridPassword: user.registerPassword,
          formGridPosition: req.body.formGridPosition,
          formGridDepartment: req.body.formGridDepartment,
          formGridPhone: req.body.formGridPhone,
          formGridAddress: req.body.formGridAddress,
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
exports.login = (req, res, next) => {
  // finds the user by email
  User.findOne({ email: req.body.email })
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
        .compare(req.body.password, user.password)
        // returns the password
        .then((valid) => {
          // checks if the password is valid
          if (!valid) {
            // returns the error
            return res.status(401).json({
              error: new Error("Incorrect password!"),
            });
          }
          // sets the token
          const token = jwt.sign(
            // sets the payload
            {userId: user._id}, 
            'RANDOM_TOKEN_SECRET',
            {expiresIn: '24h'});
          // returns the token
          res.status(200).json({
            userId: user._id,
            token: token
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

// updates a user's profile
exports.updateProfile = (req, res, next) => {
  // sets the url
  // const url = req.protocol + '://' + req.get('host');
  // sets the sauce
  const profile = new Profile({
    userId: user._id,
    formFile: req.body.formFile,
    formGridEmail: req.body.formGridEmail,
    formGridPassword: req.body.formGridPassword,
    formGridPosition: req.body.formGridPosition,
    formGridDepartment: req.body.formGridDepartment,
    formGridPhone: req.body.formGridPhone,
    formGridAddress: req.body.formGridAddress,
    formGridCity: req.body.formGridCity,
    formGridState: req.body.formGridState,
    formGridZip: req.body.formGridZip,
  });
  // checks if there is a file
  // if (req.file) {
  //   // sets the sauce image url
  //   profile.imageUrl = url + '/images/' + req.file.filename;
  // }
  // updates the sauce
  Profile.updateOne({ _id: user._id }, profile)
  // returns the sauce
    .then(() => {
      res.status(201).json({
        message: 'Profile updated successfully!',
      });
    })
    .catch((error) => {
      res.status(400).json({
        error: error,
      });
    });
};
