const express = require('express');
const path = require('path');
const config = require('./config/config');
const connectToDb = require('./config/connectToDb');

const server = express();

// Middleware
server.use(express.json());
server.use(express.urlencoded({ extended: true }));
server.use('/', require('./api/routes'));

server.use(express.static(path.join(__dirname, '/dist')));


// Establishing connections
server.listen(config.APP.PORT, () => { console.log(`Server is running on http://localhost:${config.APP.PORT}`); });
connectToDb(config.DB.URL);
