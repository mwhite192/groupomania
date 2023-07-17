// Description: This file contains the logic for the posts routes
// sets up the post model
const { Post } = require('../models');
// sets up the comment model
const { Comment } = require('../models');


// exports the create post function
exports.createPost = (req, res, next) => {
  // Check if the 'message' field exists and is not empty
  if (!req.body.postContent || req.body.postContent.trim() === '') {
    return res.status(400).json({
       error: 'message is required for creating a post.',
    });
   }
   // sets the url for the image
   const url = req.protocol + '://' + req.get('host');
   // create the post object
   const post = {
     userId: req.body.userId,
     userName: req.body.userName,
     postProfileImg: req.body.postProfileImg,
     postImg: url + '/images/' + req.file.filename,
     postContent: req.body.postContent,
     timestamp: req.body.timestamp,
     likes: req.body.likes, 
     usersLiked: req.body.usersLiked,
     comment: req.body.comment,
   };
   // checks if an image is provided, then include it in the post object
    if (req.file) {
      post.postImg = url + '/images/' + req.file.filename;
    }
   // Save the post using Sequelize's create method
   Post.create(post)
     .then((createdPost) => {
       // sends a response
       res.status(201).json(createdPost);
     })
     .catch((error) => {
       // sends an error response
       res.status(400).json({
         error: 'unable to create post!',
       });
     });
};


// exports the get all posts function
exports.getPosts = async (req, res) => {
  try {
    // Retrieve all posts from the database
    const posts = await Post.findAll();
    // Send the filtered posts as a response
    res.status(200).json(posts);
  } 
  catch (error) {
    res.status(500).json({ error: 'Failed to retrieve posts' });
  }
};


// exports the update post function
exports.updatePost = (req, res, next) => {
  // sets the url for the image
  const url = req.protocol + '://' + req.get('host');
  // finds the post by id
  Post.findByPk(req.params.id)
    .then((post) => {
      // checks if the post exists
      if (!post) {
        return res.status(404).json({ 
          error: 'Post not found.' 
        });
      }
      // checks if the user ID from the request object matches the user ID of the post
      if (post.userId !== req.body.userId) {
        return res.status(403).json({
          error: 'Unauthorized request!',
        });
      }
      // if the user is authorized, proceed with the update
      const updatePost = { ...req.body };
      // checks if there is a file
      if (req.file) {
        // sets the post image url
        updatePost.postImg = url + '/images/' + req.file.filename;
      }
      // updates the post
      post.update(updatePost)
        .then(() => {
          res.status(200).json(updatePost);
        })
        // returns an error if the post is not updated
        .catch((error) => {
          res.status(400).json({
            error: 'Unable to update post!',
          });
        });
    })
    // returns an error if the post is not found
    .catch((error) => {
      res.status(404).json({ 
        error: 'Unable to locate post!' 
      });
    });
};


// exports the delete post function
exports.deletePost = (req, res, next) => {
  // finds the post by id
  Post.findByPk(req.params.id)
    .then((post) => {
      // checks if the post exists
      if (!post) {
        // returns an error
        return res.status(404).json({
          error: 'Post not found!',
        });
      }
      // checks if the user is authorized
      if (post.userId !== req.auth.userId.toString()) {
        return res.status(403).json({
          error: 'Unauthorized request!',
        });
      }
      // deletes the post
      post.destroy()
        .then(() => {
          // returns the message
          res.status(200).json({
            message: 'Post deleted successfully!',
          });
        })
        .catch((error) => {
          // returns an error if the post is not deleted
          res.status(400).json({
            error: 'Unable to delete post!',
          });
        });
    })
    .catch((error) => {
      // returns an error if the post is not found
      res.status(500).json({
        error: 'Failed to find post!',
      });
    });
};


// exports the like post function
exports.likePosts = (req, res, next) => {
  // finds the posts by id
 Post.findOne({ _id: req.params._id }).then((post) => {
  // checks if the posts exists
  if (!post) {
    return res.status(404).json({ 
      error: 'post not found!' 
    });
  }
  // sets the userId to the request body userId
  const userId = req.body.userId;
  // checks if the user has already liked the post
  if (!post.usersLiked.includes(userId)) {
    // adds the user to the usersLiked array
    post.usersLiked.push(userId);
    // increments the likes
    post.likes++;
    // saves the updated post to the database
    post.save()
    .then((updatedPost) => {
      res.status(201).json({
        message: 'post liked successfully!',
        // return the updated usersLiked count
        usersLiked: updatedPost.usersLiked, 
      });
    })
    // returns an error if the post likes are not updated
    .catch((error) => {
      console.error(error);
      res.status(501).json({
        error: 'unable to update likes!',
      });
    });
    // checks if the user has already liked the post to unlike it
  } else if (post.usersLiked.includes(userId)) {
    // removes the user from the usersLiked array
    post.usersLiked.pull(userId);
    // decrements the likes
    post.likes--;
    // saves the updated post to the database
    post.save()
    .then((updatedPost) => {
      res.status(201).json({
        message: 'post un-liked successfully!',
        // returns the updated usersLiked count
        usersLiked: updatedPost.usersLiked, 
      });
    })
    // returns an error if the post likes are not updated
    .catch((error) => {
      console.error(error);
      res.status(501).json({
        error: 'failed to un-like post!',
      });
    });
  }
});
};


// Description: The logic for the comments begins here
// exports comment posts function
exports.commentPosts = (req, res, next) => {
  // checks if the 'message' field exists and is not empty
  if (!req.body.commentText || req.body.commentText.trim() === '') {
      return res.status(400).json({
      error: 'message is required for creating a comment.',
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
  comment
      .save()
      .then((savedComment) => {
      // sends the saved comment
      res.status(201).json(savedComment);
      })
      // returns an error if the comment is not saved
      .catch((error) => {
      res.status(400).json({
          // returns the error
          error: 'unable to create comment!',
      });
      });
};


// exports the update comment function
exports.updateComment = (req, res, next) => {
  // checks if user is authorized to update the comment
  if (req.body.userId !== req.auth.userId) {
    return res.status(403).json({
      error: 'unauthorized request!',
    });
  }
   // find the comment by id and update it
   Comment.updateOne({ _id: req.params.commentId }, 
    { commentText: req.body.commentText })
   // returns the sauce
     .then((comment) => {
      // sends a response with the saved comment
       res.status(201).json(comment);
     })
     // returns an error if the comment is not updated
     .catch((error) => {
       res.status(400).json({
         error: 'unable to update comment!',
       });
     });
 };
 

// exports the delete comment function
exports.deleteComment = (req, res, next) => {
  // finds the comment by id
  Comment.findOne({ _id: req.params.commentId })
  .then((comment) => {
    // checks if the comment exists
    if (!comment) {
      // returns an error if the comment does not exist
      return res.status(404).json({
        error: 'comment not found!',
      });
    }
    // checks if the user is authorized
    if (comment.userId !== req.auth.userId) {
      return res.status(401).json({
        message: 'unauthorized request!',
      });
    }
    // finds the comment by id and deletes it
    Comment.deleteOne({ _id: req.params.commentId })
      .then(() => {
        // returns the message
        res.status(200).json({
          message: 'comment deleted successfully!',
        });
      })
      // returns an error if the comment is not deleted
      .catch((error) => {
        res.status(400).json({
          error: 'unable to delete comment!',
        });
      });
  })
  // returns an error if the comment is not found
  .catch((error) => {
    res.status(404).json({ 
      error: 'comment not found!' 
    });
  });
};


// exports the like comment function
exports.likeComment = (req, res, next) => {
  // finds the comment by id
  Comment.findOne({ _id: req.params.commentId })
  .then((comment) => {
    // checks if the comment exists
    if (!comment) {
      return res.status(404).json({ 
        error: 'comment not found!', 
      });
    }
    // sets the userId to the request body userId
    const userId = req.body.userId; 
    // checks if the user has already liked the comment
    if (!comment.usersLiked.includes(userId)) {
      // adds the user to the usersLiked array
      comment.usersLiked.push(userId);
      // increments the likes
      comment.likes++;
      // saves the updated comment to the database
      comment.save()
      .then((updatedComment) => {
        res.status(201).json({
          message: 'comment liked successfully!',
          // returns the updated likes count
          likes: updatedComment.likes, 
        });
      })
      // returns an error if the comment likes are not updated
      .catch((error) => {
        console.error(error);
        res.status(501).json({
          error: 'failed to update comment likes!',
        });
      });
    } 
    // checks if the user has already liked the comment to unlike it
    else if (comment.usersLiked.includes(userId)) {
      // removes the user from the usersLiked array
      comment.usersLiked.pull(userId);
      // decrements the likes
      comment.likes--;
      // saves the updated comment to the database
      comment.save()
      .then((updatedComment) => {
        res.status(201).json({
          message: 'comment un-liked successfully!',
          // returns the updated likes count
          likes: updatedComment.likes, 
        });
      })
      // returns an error if the comment likes are not updated
      .catch((error) => {
        console.error(error);
        res.status(501).json({
          error: 'failed to un-like comment!',
        });
      });
    }
    });
  };
