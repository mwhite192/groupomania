// sets up the post model
const Posts = require('../models/posts');


// sets up the create post function
exports.createPost = (req, res, next) => {
   // Check if the 'message' field exists and is not empty
   if (!req.body.message || req.body.message.trim() === '') {
     return res.status(400).json({
        error: 'Message is required for creating a post.',
     });
    }
    // sets the url
    const url = req.protocol + '://' + req.get('host');
    // sets the post object
    const post = new Posts({
      userId: req.body.userId,  
      username: req.body.username,
      profilePicture: req.body.profilePicture,  
      // image: url + '/images/' + req.file.filename,
      message: req.body.message,
      timestamp: req.body.timestamp,
      likes: 0, 
      usersLiked: [],
      comments: [],
    });
    // Check if an image is provided, then include it in the post object
    if (req.file) {
      post.image = url + '/images/' + req.file.filename;
    }
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


// updates a post
exports.updatePost = (req, res, next) => {
  // sets the url
  const url = req.protocol + '://' + req.get('host');
  Posts.findOne({ _id: req.params._id })
    .then((post) => {
      // Check if the post exists
      if (!post) {
        return res.status(404).json({ error: 'Post not found.' });
      }
      // Check if the user ID from the request object matches the user ID of the post
      if (post.userId !== req.body.userId) {
        return res.status(403).json({ error: 'Unauthorized. You are authorized to update this post.' });
      }
      // If the user is authorized, proceed with the update
      const updatePost = { ...req.body };
      // checks if there is a file
      if (req.file) {
        // sets the post image url
        updatePost.image = url + '/images/' + req.file.filename;
      }
  // updates the post
  Posts.updateOne({ _id: req.params._id }, updatePost)
  // returns the post
    .then(() => {
      res.status(201).json(updatePost);
    })
    .catch((error) => {
      res.status(400).json({
        error: 'unable to update post!',
      });
    })
  .catch((error) => {
    res.status(500).json({ error: 'Server error.' });
  });
});
};


// deletes a post
exports.deletePost = (req, res, next) => {
  // finds the posts by id
  Posts.findOne({ _id: req.params._id }).then((post) => {
    // checks if the posts exists
    console.log(post);
    if (!post) {
      // returns an error
      return res.status(404).json({
        error: new Error('post not found!'),
      });
    }
    // checks if the user is authorized
    if (post.userId !== req.auth.userId) {
      return res.status(403).json({
        error: new Error('Unauthorized request!'),
      });
    }
    // deletes the posts
    Posts.deleteOne({ _id: req.params._id })
      .then(() => {
        // returns the message
        res.status(200).json({
          message: 'posts deleted successfully!',
        });
      })
      .catch((error) => {
        res.status(400).json({
          error: 'unable to delete posts!',
        });
      });
  });
};


// likes a posts
exports.likePosts = (req, res, next) => {
  // finds the posts by id
 Posts.findOne({ _id: req.params._id }).then((post) => {
  // checks if the posts exists
  if (!post) {
    return res.status(404).json({ message: "Post not found!" });
  }
  const userId = req.body.userId;
  // checks if the user has already liked the post
  if (!post.usersLiked.includes(userId)) {
    // add the user to the usersLiked array
    post.usersLiked.push(userId);
    // increment the likes
    post.likes++;
    // save the updated post to the database
    post.save()
    .then((updatedPost) => {
      res.status(201).json({
        message: "Post liked successfully!",
        likes: updatedPost.likes, // Return the updated likes count
      });
    })
    .catch((error) => {
      console.error(error);
      res.status(500).json({
        error: "Failed to update the post!",
      });
    });
  } else {
    res.status(200).json({
      message: "You already liked this post!",
    });
  }
});
 };