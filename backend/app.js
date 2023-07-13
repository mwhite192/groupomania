// Purpose: Main file for the backend server
// imports express router
const express = require('express');
//imports cors
const cors = require('cors');
// imports mongoose for MongoDB
const mongoose = require('mongoose');
// imports the user and post routers
const userRouter = require('./routes/user');
const postsRouter = require('./routes/posts');
// creates an express app
const app = express();
// imports path for working with file and directory paths
const path = require('path');
require('dotenv').config({path: path.resolve(__dirname, './.env')});


// Middleware Imports: All middleware for the backend server
// imports the http-proxy-middleware
const { createProxyMiddleware } = require('http-proxy-middleware');

// Purpose: Connects the server to MongoDB Atlas
// connects server to MongoDB Atlas
mongoose
  .connect(
    `mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@groupomania.itjdiez.mongodb.net/?retryWrites=true&w=majority`
  )
  .then(() => {
    console.log("Successfully connected to MongoDB Atlas!");
  })
  .catch((error) => {
    console.log("Unable to connect to MongoDB Atlas!");
    console.log(error);
  });


// middleware
app.use(cors({allowedHeaders: ['Authorization', 'Content-Type']}));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('static'));
app.use('/images/', express.static(path.join(__dirname, 'images')));
app.use('/api/user', userRouter);
app.use('/api/posts', postsRouter);
app.use( '/', createProxyMiddleware({target: 'http://localhost:3000', changeOrigin: true,}));


// exports the app
module.exports = app;
