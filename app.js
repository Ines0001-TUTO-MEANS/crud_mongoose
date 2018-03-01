// server.js
// where your node app starts
const express = require('express');
const app = express();
// module api routing

var router = express.Router();



const port = process.env.PORT || 3000;

/// configuration ===============================================================



//Test with Birds router
/*
router.use(function timeLog(req,res,next){
  console.log('Time:', Date.now());
  next();
})
*/
/*
router.get('/birds',function(req,res){
  res.send('Birds home Page');
  
})

router.get('/birds/about',function(req,res){
  res.send('Birds about Page');
  
})
*/

app.get("/birds/about", function (request, response) {
  
  response.send("About Page");
});

app.get("/home", function (request, response) {
  
  response.send("Home Page");
});




// listen for requests :)
var listener = app.listen(port, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});
