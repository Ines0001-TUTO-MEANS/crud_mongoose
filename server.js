// server.js
// where your node app starts

var express = require('express');
var bodyParser = require('body-parser');
var methodOverride = require('method-override');
var mongoose = require('mongoose');
var morgan  = require('morgan');
var favicon = require('serve-favicon');
var util = require('util');



// module api routing
//const authenticate = require('./app/routes/authenticate');

const app = express();
const port = process.env.PORT || 3000;
/// configuration ===============================================================
app.use(bodyParser.json());
app.use(methodOverride());


///set variable
app.set('superSecret', "My secret"); // secret variable




// use morgan to log requests to the console
app.use(morgan('dev'));

// active mongoose debug
mongoose.set('debug', true);
// mongoose instance connection url connection
mongoose.connect('mongodb://admin:ines1970@ds239117.mlab.com:39117/nodejs-test'); 

// Chargement de index.html automatiquement
app.use(express.static('source'));

// favicon
app.use(favicon(__dirname + '/source/img/icons/nodejs_125x125.png'));


// routes...
var routes = require('./routes')(app);

app.get("/", function (request, response) {
  
  response.sendFile(__dirname + '/index.html');
});

')
// listen for requests :)
var listener = app.listen(port, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});
