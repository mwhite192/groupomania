// sets up the post model
const Posts = require('../models/posts');
// sets up the comment model
const Comment = require('../models/comments');


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
  // sets the userId 
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
        error: "Failed to update likes!",
      });
    });
  } else if (post.usersLiked.includes(userId)) {
    // remove the user from the usersLiked array
    post.usersLiked.pull(userId);
    // decrement the likes
    post.likes--;
    // save the updated post to the database
    post.save()
    .then((updatedPost) => {
      res.status(201).json({
        message: "Post un-liked successfully!",
        likes: updatedPost.likes, // Return the updated likes count
      });
    })
    .catch((error) => {
      console.error(error);
      res.status(500).json({
        error: "Failed to update likes!",
      });
    });
  }
});
};


// comments on a posts
exports.commentPosts = (req, res, next) => {
  // Check if the 'message' field exists and is not empty
  if (!req.body.commentText || req.body.commentText.trim() === '') {
      return res.status(400).json({
      error: 'Message is required for creating a comment.',
      });
  }
  // sets the comment object
  const comment = new Comment({
      postId: req.body.postId,
      userId: req.body.userId,
      username: req.body.username,
      profilePicture: req.body.profilePicture,
      commentText: req.body.commentText,
      commentDate: req.body.commentDate,
      likes: 0,
      usersLiked: [],
  });
  // saves the comment
  console.log(comment);
  comment
      .save()
      .then((savedComment) => {
      // sends a response with the saved comment
      res.status(201).json(savedComment);
      })
      .catch((error) => {
      // sends an error response
      res.status(400).json({
          // returns the error
          error: 'Unable to create comment!',
      });
      });
};


// updates a comment
exports.updateComment = (req, res, next) => {
  // checks if user is authorized to update the comment
  if (req.body.userId !== req.auth.userId) {
    return res.status(403).json({
      error: new Error('Unauthorized request!'),
    });
  }
   // updates the comment
   Comment.updateOne({ _id: req.params.commentId }, 
    { commentText: req.body.commentText })
   // returns the sauce
     .then((comment) => {
      // sends a response with the saved comment
       res.status(201).json(comment);
     })
     .catch((error) => {
       res.status(400).json({
         error: error,
       });
     });
 };
 

// deletes a comment
exports.deleteComment = (req, res, next) => {
  // finds the comment by id
  Comment.findOne({ _id: req.params.commentId }).then((comment) => {
    // checks if the comment exists
    console.log(comment);
    if (!comment) {
      // returns an error
      return res.status(404).json({
        error: new Error('comment not found!'),
      });
    }
    // checks if the user is authorized
    if (comment.userId !== req.auth.userId) {
      return res.status(401).json({
        message: new Error('Unauthorized request!'),
      });
    }
    // deletes the comment
    Comment.deleteOne({ _id: req.params.commentId })
      .then(() => {
        // returns the message
        res.status(200).json({
          message: 'comment deleted successfully!',
        });
      })
      .catch((error) => {
        res.status(400).json({
          error: 'unable to delete comment!',
        });
      });
  })
  .catch((error) => {
    res.status(500).json({ error: 'Server error.' });
  });
};


// likes a comment
exports.likeComment = (req, res, next) => {
  // finds the comment by id
  Comment.findOne({ _id: req.params.commentId }).then((comment) => {
    // checks if the comment exists
    if (!comment) {
      return res.status(404).json({ message: "Comment not found!" });
    }
    // sets the userId
    const userId = req.body.userId; 
    // checks if the user has already liked the comment
    if (!comment.usersLiked.includes(userId)) {
      // add the user to the usersLiked array
      comment.usersLiked.push(userId);
      // increment the likes
      comment.likes++;
      // save the updated comment to the database
      comment.save()
      .then((updatedComment) => {
        res.status(201).json({
          message: "Comment liked successfully!",
          likes: updatedComment.likes, // Return the updated likes count
        });
      })
      .catch((error) => {
        console.error(error);
        res.status(500).json({
          error: "Failed to update likes!",
        });
      });
    } 
    // checks if the user has already liked the comment to unlike it
    else if (comment.usersLiked.includes(userId)) {
      // remove the user from the usersLiked array
      comment.usersLiked.pull(userId);
      // decrement the likes
      comment.likes--;
      // save the updated comment to the database
      comment.save()
      .then((updatedComment) => {
        res.status(201).json({
          message: "Comment un-liked successfully!",
          likes: updatedComment.likes, // Return the updated likes count
        });
      })
      .catch((error) => {
        console.error(error);
        res.status(500).json({
          error: "Failed to update likes!",
        });
      });
    }
    });
  };
