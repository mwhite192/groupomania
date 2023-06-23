// sets up the post model
const Posts = require('../models/posts');

// sets up the create post function
exports.createPost = async (req, res, next) => {
    // sets the url
    const url = req.protocol + '://' + req.get('host');
    // sets the post object
    req.body.post = JSON.parse(req.body.post);
    const post = new Posts({
      ...req.body.post, 
      image: url + '/images/' + req.file.filename,
      likes: 0, 
      dislikes: 0, 
      usersLiked: [],
      usersDisliked: [],
      comments: [],
    });
    // saves the sauce
    console.log(post);
    post
    .save()
    .then(() => {
      res.status(201).json({
        message: 'Sauce added successfully!',
      });
    })
    .catch((error) => {
      res.status(400).json({
        error: 'Unable to add sauce!',
      });
    });
  };

