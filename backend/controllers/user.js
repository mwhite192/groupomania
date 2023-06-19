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
          formFile: url + '/images/' + req.body.registerFile,
          formGridEmail: user.registerEmail,
          formGridPassword: user.registerPassword,
          formGridPosition: req.body.formGridPosition,
          // formGridDepartment: req.body.formGridDepartment,
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
        .then(async (valid) => {
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

// // retrieves the user's profile
// exports.getProfile = (req, res, next) => {
//   // saves the user's id to a variable
//   const userId = req.user._id;
//   // finds the profile by id
//   Profile.findOne({ userId: userId })
//   // returns the profile
//     .then((profile) => {
//       const profileData = {
//         id: userId,
//         name: profile.name,
//         image: profile.formFile,
//         email: profile.formGridEmail,
//         password: profile.formGridPassword,
//         position: profile.formGridPosition,
//         // department: profile.formGridDepartment,
//         phone: profile.formGridPhone,
//         workOffice: profile.formGridWorkOffice,
//         city: profile.formGridCity,
//         state: profile.formGridState,
//         zip: profile.formGridZip,
//       };
//       res.status(200).json(profileData);
//     })
//     // returns an error if the profile is not found
//     .catch((error) => {
//       res.status(404).json({
//         error: "Unable to locate profile!",
//       });
//     });
// };

// retrieves the user's profile 
// exports.getProfile = (req, res, next) => {
//   // saves the user's id to a variable
//   const userId = req.user._id;
//   // finds the profile by id
//   Profile.findOne({ userId: userId })
//     // returns the profile
//     .then((profile) => {
//       res.status(200).json(profile);
//     })
//     // returns an error if the profile is not found
//     .catch((error) => {
//       res.status(404).json({
//         error: "Unable to locate profile!",
//       });
//     });
// };

// updates a user's profile
exports.updateProfile = (req, res, next) => {
  // sets the url
  // const url = req.protocol + '://' + req.get('host');
  // sets the updated profile
  const profile = new Profile({
    userId: user._id,
    formFile: url + '/images/' + req.file.file,
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
  if (req.file) {
    // sets the sauce image url
    profile.imageUrl = url + '/images/' + req.file.filename;
  }
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
