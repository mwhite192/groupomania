const express = require('express');
const mongoose = require('mongoose');
const userRouter = require('./routes/user');
const app = express();
const path = require('path');
const { createProxyMiddleware } = require('http-proxy-middleware');
require('dotenv').config({path: path.resolve(__dirname, './.env')});

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

app.use (express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('static'));
app.use('/', userRouter);
app.use('/api/user', userRouter);

app.use(
  '/',
  createProxyMiddleware({
    target: 'http://localhost:3000', // Change to the actual URL of your frontend development server
    changeOrigin: true,
  })
);

app.use((err, req, res, next) => {
  console.error(err);
  res.status(500).json({ error: 'Internal Server Error' });
  next();
});

// app.use((req, res, next) => {
//   console.log("Request received!");
//   next();
// });

// app.use((req, res, next) => {
//   res.status(201);
//   next();
// });

// app.use((req, res, next) => {
//   res.json({ message: "Your request was successful!" });
//   next();
// });

// app.use((req, res, next) => {
//   console.log("Response sent successfully!");
// });






module.exports = app;
