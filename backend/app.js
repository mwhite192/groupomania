//  imported application dependencies
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const userRouter = require('./routes/user');
const profileRouter = require('./routes/profile');
// const userPostRouter = require('./routes/userPost');
const app = express();
const path = require('path');
const { createProxyMiddleware } = require('http-proxy-middleware');
require('dotenv').config({path: path.resolve(__dirname, './.env')});

// Connect to MongoDB Atlas
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

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('static'));
app.use('/images/', express.static(path.join(__dirname, 'images')));
app.use('/api/user', userRouter);
app.use('/api/profile', profileRouter);
// app.use('/api/userPost', userPostRouter);
app.use( '/', createProxyMiddleware({target: 'http://localhost:3000', changeOrigin: true,}));

// Error handling
app.use((err, req, res, next) => {
  if(err){
  res.status(500).json({ error: 'Internal Server Error' });
  }
  else{
  next();
  }
});





module.exports = app;
