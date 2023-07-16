// Description: This file contains the business logic for the auth middleware
// sets javascript token to be used for authentication
const jwt = require('jsonwebtoken');
// sets up the user model
const { User } = require('../models');

// checks if the token is valid
module.exports = async (req, res, next) => {
  try {
    // splits the token into two parts
    const token = req.headers.authorization.split(' ')[1];
    // verifies the token
    const decodedToken = jwt.verify(token, 'RANDOM_TOKEN_SECRET');
    // sets the userId to the decoded token
    const userId = decodedToken.userId;
    // Check if the user exists in the database
    const user = await User.findByPk(userId);
    // if the user does not exist, throw an error
    if (!user) {
      res.status(403).json({
        error: 'Invalid user ID!',
      });
    } else {
      req.auth = { userId };
      next();
    }
  } catch {
    res.status(401).json({
      error: 'Invalid request!',
    });
  }
};

      
//       const user = await User.findByPk(userId);
//       if (!user) {
//         res.status(403).json({
//           error: 'Invalid user ID!',
//         });
//       } else {
//         req.auth = { userId };
//         next();
//       }
//     } catch {
//       res.status(401).json({
//         error: 'Invalid request!',
//       });
//     }
//   });
// };
