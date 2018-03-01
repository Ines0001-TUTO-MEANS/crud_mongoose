// server.js
// where your node app starts
const express = require('express');
var birds = require('./app/routes/birds')
const app = express();
// module api routing

var router = express.Router();



const port = process.env.PORT || 3000;

/// configuration ===============================================================



// home page route (http://localhost:8080)
router.get('/', function(req, res) {
    res.send('im the home page!');  
});

// about page route (http://localhost:8080/about)
router.get('/about', function(req, res) {
    res.send('im the about page!'); 
});

// apply the routes to our application

router.use(function timeLog(req,res,next){
  console.log('Time:', Date.now());
  next();
})

router.get('/birds',function(req,res){
  res.send('Birds home Page');
})

router.get('/birds/about',function(req,res){
  res.send('Birds about Page');
})

app.use('/', router);



// listen for requests :)
var listener = app.listen(port, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});
