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
app.set('port', process.env.PORT || 3000);
/// configuration ===============================================================
app.use(bodyParser.json());
app.use(methodOverride());
// use morgan to log requests to the console
app.use(morgan('dev'));

///set variable
app.set('superSecret', "My secret"); // secret variable

// Chargement de index.html automatiquement
app.use(express.static(__dirname + 'source'));




// active mongoose debug
mongoose.set('debug', true);
// mongoose instance connection url connection
mongoose.connect('mongodb://admin:ines1970@ds239117.mlab.com:39117/nodejs-test'); 



// favicon
app.use(favicon(__dirname + '/source/img/icons/nodejs_125x125.png'));


// routes...
var routes = require('./routes')(app);
/*
app.get("/", function (request, response) {
  console.log('__dirname:',__dirname)
  response.sendFile(__dirname + '/index.html');
});
*/
// listen for requests :)
var listener = app.listen(app.get('port'), function () {
  console.log('Your app is listening on port ' + listener.address().port);
});
