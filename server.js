// server.js
// where your node app starts
const express = require('express');
const bodyParser = require('body-parser');
const methodOverride = require('method-override');
const mongoose = require('mongoose');
const restify = require('express-restify-mongoose');
const morgan      = require('morgan');
const app = express();
const router = express.Router();
const port = process.env.PORT || 3000;

/// configuration ===============================================================
app.use(bodyParser.json());
app.use(methodOverride());

// use morgan to log requests to the console
app.use(morgan('dev'));

// mongoose instance connection url connection
mongoose.connect('mongodb://admin:ines1970@ds239117.mlab.com:39117/nodejs-test'); 

// Chargement de index.html automatiquement
app.use(express.static('source'));

// Testing module mongoose-express-router'

var schema_person = require('./app/models/Person'),
    schema_task = require('./app/models/Task');

// Using query builder
restify.serve(router, mongoose.model('Users', schema_person ))
restify.serve(router, mongoose.model('Tasks', schema_task ))
  
app.use(router)

app.get("/", function (request, response) {
  
  response.sendFile(__dirname + '/index.html');
});

// listen for requests :)
var listener = app.listen(port, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});
