// sets up the post model
const Posts = require('../models/posts');

// sets up the create post function
exports.createPost = (req, res, next) => {
    // sets the url
    const url = req.protocol + '://' + req.get('host');
    // sets the post object
    const post = new Posts({
      userId: req.body.userId,    
      image: url + '/images/' + req.file.filename,
      message: req.body.message,
      timestamp: req.body.timestamp,
      likes: 0, 
      dislikes: 0, 
      usersLiked: [],
      usersDisliked: [],
      comments: [],
    });
    // saves the sauce
    post
    .save()
    .then(() => {
      res.status(201).json({
        ...post._doc,
      });
    })
    .catch((error) => {
      res.status(400).json({
        error: 'Unable to create post!',
      });
    });
  };

