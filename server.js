// server.js
// where your node app starts

var express = require('express'),
  app = express(),
  port = process.env.PORT || 3000,
  mongoose = require('mongoose'),
  router = require('mongoose-express-router'),
  bodyParser = require('body-parser');
 
/// configuration ===============================================================

// mongoose instance connection url connection
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://admin:ines1970@ds239117.mlab.com:39117/nodejs-test'); 

// Chargement de index.html automatiquement
app.use(express.static('source'));

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Testing module mongoose-express-router'
var schema_person = require('./app/models/Person'),
    schema_task = require('./app/models/Task')

var User = mongoose.model('User', schema_person.plugin(router));
var Task = mongoose.model('Task', schema_task.plugin(router));

// Using query builder
User.
  find().
  //where('name').equals('Ghost').
  sort('name').
  select('name email').
  where('')
  exec(function (err, person) {
    if (err) return handleError(err);
    // Prints "Space Ghost is a talk show host."
    console.log('person:', person);
  });


app
  .get('/users', User.router('find'))
  .post('/users', User.router('create'))
  .get('/users/:id', User.router('findOne'))
  .patch('/users/:id', User.router('update'))
  .delete('/users/:id', User.router('delete'));

app
  .get('/tasks', Task.router('find'))
  .post('/tasks', Task.router('create'))
  .get('/tasks/:id', Task.router('findOne'))
  .patch('/tasks/:id', Task.router('update'))
  .delete('/tasks/:id', Task.router('delete'));

app.get("/", function (request, response) {
  
  response.sendFile(__dirname + '/index.html');
});

// listen for requests :)
var listener = app.listen(port, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});


