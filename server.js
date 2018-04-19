// server.js
// where your node app starts

var  express = require('express')
    ,bodyParser = require('body-parser')
    ,methodOverride = require('method-override')
    ,mongoose = require('mongoose')
    ,path = require('path')
    ,morgan  = require('morgan')
    ,favicon = require('serve-favicon')
    ,util = require('util');



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
app.use(express.static(__dirname + '/source'));


// active mongoose debug
mongoose.set('debug', true);
// mongoose instance connection url connection
mongoose.connect('mongodb://admin:ines1970@ds239117.mlab.com:39117/nodejs-test'); 



// favicon
app.use(favicon(path.join(__dirname + '/source/img/icons/nodejs_125x125.png')));


// routes...
var routes = require('./routes')(app);

/*
Lorsque html5Mode est activé, le caractère # ne sera plus utilisé dans vos URL. 
Le symbole # est utile car il ne nécessite aucune configuration côté serveur. 
Sans #, l'URL semble beaucoup plus agréable, mais elle nécessite également des réécritures côté serveur
*/
app.get("/*", function (request, response) {
  response.sendFile(path.join(__dirname + '/source/index.html'));
});


// listen for requests :)
var listener = app.listen(app.get('port'), function () {
  console.log('Your app is listening on port ' + listener.address().port);
});
