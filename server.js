var express = require('express');
var path = require("path");
var bodyParser = require('body-parser');

// Express
var server = express();
server.use(bodyParser.urlencoded({ extended: true }));
server.use(bodyParser.json());

/* register pwa web app */
var pathPublic = path.join(__dirname, 'work/');
server.use('/', express.static(pathPublic, { index: 'index.html' }));

module.exports = server;