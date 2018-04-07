// server.js
// where your node app starts

var express = require('express');
var bodyParser = require('body-parser');
var methodOverride = require('method-override');
var mongoose = require('mongoose');
var morgan  = require('morgan');
var favicon = require('serve-favicon');


// module api routing
//const authenticate = require('./app/routes/authenticate');

const app = express();
const port = process.env.PORT || 3000;

///set variable
app.set('superSecret', "My secret"); // secret variable

/// configuration ===============================================================
app.use(bodyParser.json());
app.use(methodOverride());



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

// Routing
//app.use('/api', require('./app/routes/authenticate')) // must before api/ routing
//app.use('/', require('./app/routes/users'))
//app.use('/', require('./app/routes/tasks'))

//app.use(authenticate)
app.use('/test', require('./app/controller/route'))



app.get("/", function (request, response) {
  
  response.sendFile(__dirname + '/index.html');
});



// listen for requests :)
var listener = app.listen(port, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});
