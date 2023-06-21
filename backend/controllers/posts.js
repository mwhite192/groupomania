// sets up the post model
const posts = require('../models/posts');

// sets up the create post function
exports.createPost = async (req, res, next) => {
    const { userId, name, message } = req.body;
    const imageURL = req.file ? `${req.protocol}://${req.get('host')}/images/${req.file.filename}` : null;
    await posts.create({
        userId: userId,
        name: name,
        message: message,
        imageURL: imageURL,
    })
    .then(() => res.status(201).json({ message: 'Post created successfully!' }))
    .catch(error => res.status(400).json({ error }));
};

