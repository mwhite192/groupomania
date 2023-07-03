// sets up the comments model
const Comments = require('../models/comments');


// sets up the create comment function
exports.createComment = (req, res, next) => {
    // Check if the 'message' field exists and is not empty
    if (!req.body.commentText || req.body.commentText.trim() === '') {
        return res.status(400).json({
        error: 'Message is required for creating a comment.',
        });
    }
    // sets the url
    const url = req.protocol + '://' + req.get('host');
    // sets the comment object
    const comment = new Comments({
        postId: req.body.postId,
        userId: req.body.userId,
        username: req.body.username,
        profilePicture: req.body.profilePicture,
        commentText: req.body.message,
        commentDate: req.body.timestamp,
        likes: 0,
        usersLiked: [],
    });
    // Check if an image is provided, then include it in the comment object
    if (req.file) {
        comment.commentImage = url + '/images/' + req.file.filename;
    }
    // saves the comment
    console.log(comment);
    comment
        .save()
        .then(() => {
        // sends a response
        res.status(201).json({
            // returns the comment object
            ...comment._doc,
        });
        })
        .catch((error) => {
        // sends an error response
        res.status(400).json({
            // returns the error
            error: 'Unable to create comment!',
        });
        });
};