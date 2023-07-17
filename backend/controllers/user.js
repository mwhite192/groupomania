// Description: This file contains the business logic for the user routes
// sets up bcrypt
const bcrypt = require('bcrypt');
// sets up jsonwebtoken
const jwt = require('jsonwebtoken'); 
// sets up the user model
const { User } = require('../models');
// sets up the profile model
const { Profile } = require('../models');


// exports the signup function
module.exports.signup = async (req, res, next) => {
  try {
    // Check if the registerPassword field is present and is a string
    if (!req.body.registerPassword || typeof req.body.registerPassword !== 'string') {
      return res.status(400).json({ error: 'Invalid registerPassword field' });
    }
    console.log(req.body)
    // sets the url for the image
    const url = req.protocol + '://' + req.get('host');
    // sets up the salt rounds
    const saltRounds = 10;
    // hashes the password
    const hash = await bcrypt.hash(req.body.registerPassword, saltRounds);
    // Create a new user
    const newUser = await User.create({
      name: req.body.name,
      registerEmail: req.body.registerEmail,
      registerPassword: hash,
      file: url + '/images/' + req.file.filename,
    });

    // Create a new user profile
    const newProfile = await Profile.create({
      userId: newUser.id,
      name: newUser.name,
      formFile: url + '/images/' + req.file.filename,
      formGridEmail: newUser.registerEmail,
      formGridPassword: newUser.registerPassword,
      formGridPosition: req.body.formGridPosition,
      formGridPhone: req.body.formGridPhone,
      formGridWorkOffice: req.body.formGridWorkOffice,
      formGridCity: req.body.formGridCity,
      formGridState: req.body.formGridState,
      formGridZip: req.body.formGridZip,
    });
  
    res.status(201).json({
      message: 'User added successfully!',
      profile: newProfile,
    });

  } catch (error) {
    console.error(error);
    res.status(500).json({
      error: 'Failed to create user or profile!',
    });
  }
};
        

// exports the login function
exports.login = async (req, res, next) => {
  try {
    // finds the user by email
    const user = await User.findOne({ where: { registerEmail: req.body.email } });
    // checks if the user exists
    if (!user) {
      return res.status(401).json({
        error: 'User not found!',
      });
    }
    // compares the password
    const passwordMatch = await bcrypt.compare(req.body.password, user.registerPassword);
    // checks if the password is valid
    if (!passwordMatch) {
      return res.status(401).json({
        error: 'Incorrect password!',
      });
    }
    // finds the profile by user id
    const profile = await Profile.findOne({ where: { userId: user.id } });
    // sets the token to expire in 24 hours
    const token = jwt.sign(
      // sets the payload
      { userId: user.id },
      'RANDOM_TOKEN_SECRET',
      { expiresIn: '24h' }
    );
    // returns the token, user id, user, and profile
    res.status(200).json({
      userId: user.id,
      token: token,
      ...user,
      ...profile,
    });
  } catch (error) {
    res.status(500).json({
      error: 'An error occurred while logging in!',
    });
  }
  console.log();
}; 



// exports the get all users function
exports.getAll = (req, res, next) => {
  // finds all users
  Profile.findAll()
    // returns the users
    .then((profiles) => {
      res.status(200).json(profiles);
    })
    // returns the error if the users are not found
    .catch((error) => {
      res.status(400).json({
        error: 'Users not found!',
      });
    });
};


// exports the update profile function
exports.update = (req, res, next) => {
  // sets the url for the image
  const url = req.protocol + '://' + req.get('host');
  // creates a update profile object
  const updateProfile = { ...req.body};
  // checks if there is an image
  if (req.file) {
    // sets the image path for the profile
    updateProfile.formFile = url + '/images/' + req.file.filename;
  }
  const { userId } = req.params;
  User.findByPk(userId)
    .then((user) => {
      if (!user) {
        return res.status(404).json({
          error: 'User not found!',
        });
      }
      return user.save();
    })
    .then(() => {
      // Update Profile
      Profile.update(updateProfile, {
        where: { userId: req.params.userId },
      })
      return updateProfile;
    })
    .catch((error) => {
      // returns the error if the user is not updated
      res.status(500).json({
        error: 'Failed to update user!',
      });
    });
  };


// exports the delete user function
exports.delete = async (req, res, next) => {
  try {
    // finds the user by user email
    const user = await User.findOne({ where: { registerEmail: req.params.userId } });
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
        error: 'User not authorized!',
      });
    }
    // deletes the user and associated profile
    await Promise.all([
      user.destroy(),
      Profile.destroy({ where: { userId: user.id } }),
    ]);
    // returns success message
    return res.status(200).json({
      message: 'User deleted successfully!',
    });
  } catch (error) {
    // returns the error if the user is not deleted
    return res.status(400).json({
      error: 'Failed to delete user!',
    });
  }
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