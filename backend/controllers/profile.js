// Description: This file contains the business logic for the profile routes
// sets up the profile model
// const Profile = require('../models/profile');

// // retrieves the user's profile
// exports.getProfile = (req, res, next) => {
//     // saves the user's id to a variable
//     const userId = req.user._id;
//     // finds the profile by id
//     Profile.findOne({ userId: userId })
//     // returns the profile
//       .then((profile) => {
//         const profileData = {
//           userId: userId,
//           name: profile.name,
//           formFile: profile.formFile,
//           formGridEmail: profile.formGridEmail,
//           formGridPassword: profile.formGridPassword,
//           formGridPosition: profile.formGridPosition,
//           formGridPhone: profile.formGridPhone,
//           formGridWorkOffice: profile.formGridWorkOffice,
//           formGridCity: profile.formGridCity,
//           formGridState: profile.formGridState,
//           formGridZip: profile.formGridZip,
//         };
//         res.status(200).json(profileData);
//       })
//       // returns an error if the profile is not found
//       .catch((error) => {
//         res.status(404).json({
//           error: "Unable to locate profile!",
//         });
//       });
// };

// updates a user's profile
// exports.updateProfile = (req, res, next) => {
//   // sets the url
//   // const url = req.protocol + '://' + req.get('host');
//   // sets the sauce
//   const profile = new Profile({
//     userId: user._id,
//     formFile: req.body.formFile,
//     formGridEmail: req.body.formGridEmail,
//     formGridPassword: req.body.formGridPassword,
//     formGridPosition: req.body.formGridPosition,
//     formGridDepartment: req.body.formGridDepartment,
//     formGridPhone: req.body.formGridPhone,
//     formGridAddress: req.body.formGridAddress,
//     formGridCity: req.body.formGridCity,
//     formGridState: req.body.formGridState,
//     formGridZip: req.body.formGridZip,
//   });
//   // checks if there is a file
//   // if (req.file) {
//   //   // sets the sauce image url
//   //   profile.imageUrl = url + '/images/' + req.file.filename;
//   // }
//   // updates the sauce
//   Profile.updateOne({ _id: user._id }, profile)
//   // returns the sauce
//     .then(() => {
//       res.status(201).json({
//         message: 'Profile updated successfully!',
//       });
//     })
//     .catch((error) => {
//       res.status(400).json({
//         error: error,
//       });
//     });
// };
