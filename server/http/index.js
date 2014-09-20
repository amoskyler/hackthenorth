var http = require('http');
var app = require('./express');

var httpServer = http.createServer(app);

module.exports = httpServer;
