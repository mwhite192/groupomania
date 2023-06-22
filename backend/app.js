// Purpose: Main file for the backend server
// imports express router
const express = require('express');
//imports cors
const cors = require('cors');
// imports mongoose for MongoDB
const mongoose = require('mongoose');
// imports the user, profile, and post routers
const userRouter = require('./routes/user');
// const profileRouter = require('./routes/profile');
// const postRouter = require('./routes/posts');
// creates an express app
const app = express();
// imports path for working with file and directory paths
const path = require('path');
require('dotenv').config({path: path.resolve(__dirname, './.env')});

// Middleware Imports: All middleware for the backend server
// imports the http-proxy-middleware
const { createProxyMiddleware } = require('http-proxy-middleware');

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
// app.use('/api/profile', profileRouter);
// app.use('/api/posts', postsRouter);
app.use( '/', createProxyMiddleware({target: 'http://localhost:3000', changeOrigin: true,}));

// Error handling
// app.use((err, req, res, next) => {
//   if(err){
//   res.status(500).json({ error: 'Internal Server Error' });
//   }
//   else{
//   next();
//   }
// });

module.exports = app;
