// Purpose: Main file for the backend server
// imports express router
const express = require('express');
//imports cors
const cors = require('cors');
// creates an express app
const app = express();
// imports all models
const db = require('./models');
// imports path for working with file and directory paths
const path = require('path');
// imports the body parser
const bodyParser = require('body-parser');
// imports the user and post routers
const userRouter = require('./routes/user');
const postsRouter = require('./routes/posts');


// Middleware Imports: All middleware for the backend server
// imports the http-proxy-middleware
const { createProxyMiddleware } = require('http-proxy-middleware');

// Purpose: Connects the server to mySql workbench
(async () => {
    await db.sequelize.sync();
    db.sequelize.authenticate().then(() => {
        console.log('Connection has been established successfully.');
     }).catch((error) => {
        console.error('Unable to connect to the database: ', error);
     });
     
    console.log('Connected to the database!');
})();

// middleware
app.use(cors({allowedHeaders: ['Authorization', 'Content-Type']}));
app.use(express.json());
app.use(bodyParser.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('static'));
app.use('/images/', express.static(path.join(__dirname, 'images')));
app.use('/api/user', userRouter);
app.use('/api/posts', postsRouter);
app.use( '/', createProxyMiddleware({target: 'http://localhost:3000', changeOrigin: true,}));




// exports the app
module.exports = app;
