// sets up the post model
const Posts = require('../models/posts');


// sets up the create post function
exports.createPost = (req, res, next) => {
    // sets the url
    const url = req.protocol + '://' + req.get('host');
    // sets the post object
    const post = new Posts({
      userId: req.body.userId,  
      username: req.body.username,
      profilePicture: req.body.profilePicture,  
      image: url + '/images/' + req.file.filename,
      message: req.body.message,
      timestamp: req.body.timestamp,
      likes: 0, 
      usersLiked: [],
      comments: [],
    });
    // saves the post
    console.log(post);
    post
    .save()
    .then(() => {
      // sends a response
      res.status(201).json({
        // returns the post object
        ...post._doc,
      });
    })
    .catch((error) => {
      // sends an error response
      res.status(400).json({
        // returns the error
        error: 'Unable to create post!',
      });
    });
};


// sets up the get all posts function
exports.getAllPosts = (req, res, next) => {
  // finds all the posts
  Posts.find()
  // returns the posts
    .then((posts) => {
      res.status(200).json(posts);
    })
    .catch((error) => {
      res.status(400).json({
        error: error,
      });
    });
};
console.log(Posts);

// likes a posts
exports.likePosts = (req, res, next) => {
  // finds the posts by id
 Posts.findOne({ userId: req.body.userId }).then((posts) => {
    const like = req.body.likes;
    switch (like) {
      // case 1: user likes the posts
      case 1:
        // checks if the user has already liked the posts
        if (!posts.usersLiked.includes(req.body.userId)) {
          // adds the user to the usersLiked array
          posts.usersLiked.push(req.body.userId);
          // increments the likes
          posts.likes++;
          // updates the posts
          Posts.updateOne({ userId: req.body.userId }, posts).then(() => {
            // returns the message
            res.status(201).json({
              message: "posts liked successfully!",
            });
          });
        } else {
          res.status(200).json({
            message: "you already liked this posts!",
          });
        }
        break;
        // case 0: user un-likes the posts
      case 0:
          // checks if the user has already liked the posts
          if (posts.usersLiked.includes(req.body.userId)) {
            // removes the user from the usersLiked array
            posts.usersLiked.pull(req.body.userId);
            // decrements the likes
            posts.likes--;
            // updates the posts
            Posts.updateOne({ userId: req.body.userId }, posts).then(() => {
              // returns the message
              res.status(201).json({
                message: "posts un-liked successfully!",
              });
            });
          } else {
            res.status(200).json({
              message: "you already un-liked this posts!",
            });
          }
          break; 
    }
  });
};

// // updates a post
// exports.updatePost = (req, res, next) => {
//   // sets the url
//   const url = req.protocol + '://' + req.get('host');
//   // sets the post
//   const post = new Posts({
//     userId: req.body.userId,
//     username: req.body.username,
//     profilePicture: req.body.profilePicture,
//     image: req.body.image,
//     message: req.body.message,
//     timestamp: req.body.timestamp,
//     likes: req.body.likes,
//     usersLiked: req.body.usersLiked,
//     comments: req.body.comments,
//   });
//   // checks if there is a file
//   if (req.file) {
//     // sets the post image url
//     post.image = url + '/images/' + req.file.filename;
//   }
//   // updates the post
//   post.updateOne({ userId: req.body.userId }, post)
//   // returns the post
//     .then(() => {
//       res.status(201).json({
//         message: 'post updated successfully!',
//       });
//     })
//     .catch((error) => {
//       res.status(400).json({
//         error: 'unable to update post!',
//       });
//     });
// };
