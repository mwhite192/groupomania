// Description: This file contains the logic for the profile routes
// sets up the profile model
const Profile = require('../models/Profile');


// retrieves the user's profile 
exports.getProfile = (req, res, next) => {
  // saves the user's id to a variable
  const userId = req.user._id;
  // finds the profile by id
  Profile.findOne({ userId: userId })
    // returns the profile
    .then((profile) => {
      res.status(200).json(profile);
    })
    // returns an error if the profile is not found
    .catch((error) => {
      res.status(404).json({
        error: "Unable to locate profile!",
      });
    });
};

