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

// Point static path to dist
app.use(express.static(path.join(__dirname, 'dist')));

// Set our api routes
app.use('/api', api);

// // Run the app by serving the static files
// // in the dist directory
// app.use(express.static(__dirname + '/dist'));


// // Start the app by listening on the default
// // Heroku port
// app.listen(process.env.PORT || 8080);


// // ...
// // For all GET requests, send back index.html
// // so that PathLocationStrategy can be used
// app.get('/*', function(req, res) {
//   res.sendFile(path.join(__dirname + '/dist/index.html'));
// });

// Catch all other routes and return the index file
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist/index.html'));
});

/**
 * Get port from environment and store in Express.
 */
const port = process.env.PORT || '3000';
app.set('port', port);

/**
 * Create HTTP server.
 */
const server = http.createServer(app);

/**
 * Listen on provided port, on all network interfaces.
 */
server.listen(port, () => console.log(`API running on localhost:${port}`));