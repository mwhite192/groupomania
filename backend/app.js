// Purpose: Main file for the backend server
// imports express router
const express = require('express');
//imports cors
const cors = require('cors');
// creates an express app
const app = express();
// imports path for working with file and directory paths
const path = require('path');
require('dotenv').config({path: path.resolve(__dirname, './.env')});
// imports the user and post routers
const userRouter = require('./routes/user');
const postsRouter = require('./routes/posts');


// Middleware Imports: All middleware for the backend server
// imports the http-proxy-middleware
const { createProxyMiddleware } = require('http-proxy-middleware');


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
