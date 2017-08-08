// server.js
const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const compression = require('compression');

// Get our API routes
const api = require('./server/routes/api');

const app = express();

// Parsers for POST data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// Use Gzip Compression
app.use(compression());

// Set our api routes
app.use('/api', api);

// Run the app by serving the static files
// in the dist directory
app.use(express.static(__dirname + '/dist'));


// Start the app by listening on the default
// Heroku port
app.listen(process.env.PORT || 8080);


// ...
// For all GET requests, send back index.html
// so that PathLocationStrategy can be used
app.get('/*', function(req, res) {
  console.log("The app is running!");
  res.sendFile(path.join(__dirname + '/dist/index.html'));
});