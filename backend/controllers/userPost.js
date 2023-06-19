// sets up the post model
const UserPost = require('../models/userPost');

// sets up the create post function
exports.createPost = async (req, res, next) => {
    const { userId, name, message } = req.body;
    const imageURL = req.file ? `${req.protocol}://${req.get('host')}/images/${req.file.filename}` : null;
    await UserPost.create({
        userId: userId,
        name: name,
        message: message,
        imageURL: imageURL,
    })
    .then(() => res.status(201).json({ message: 'Post created successfully!' }))
    .catch(error => res.status(400).json({ error }));
};