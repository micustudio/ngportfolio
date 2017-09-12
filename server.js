'use strict';

require('zone.js/dist/zone-node');
require('reflect-metadata');

// server.js
const express = require('express');
const ngUniversal = require('@nguniversal/express-engine');
const { provideModuleMap } = require('@nguniversal/module-map-ngfactory-loader');

const { AppServerModuleNgFactory, LAZY_MODULE_MAP } = require('./dist-server/main.bundle');

function angularRouter(req, res) {
  //res.render('index', {req, res});

  // For all GET requests, send back index.html
 // so that PathLocationStrategy can be used
  // console.log("The app is running!");
  res.sendFile(path.join(__dirname + '/dist/index.html'));
}

const bodyParser = require('body-parser');
const path = require('path');
const compression = require('compression');

// Get our API routes
const api = require('./server/routes/api');

const app = express();

app.engine('html', ngUniversal.ngExpressEngine({
  bootstrap: AppServerModuleNgFactory,
  providers: [
    provideModuleMap(LAZY_MODULE_MAP)
  ]
}))


app.set('view engine', 'html');
app.set('views', 'dist');

// Parsers for POST data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// Use Gzip Compression
app.use(compression());

// Set our api routes
app.use('/api', api);



app.get('/', angularRouter);

// Run the app by serving the static files
// in the dist directory
app.use(express.static(__dirname + '/dist'));


app.get('*', angularRouter);


// Start the app by listening on the default
// Heroku port
app.listen((process.env.PORT || 8080), () => {
  console.log("Listening on port 8080!!");
});
