// server.js
// where your node app starts
const express = require('express');

// module api routing
//const authenticate = require('./app/routes/authenticate');
var birds = require('./app/routes/birds')


const app = express();
const port = process.env.PORT || 3000;

/// configuration ===============================================================



//Test with Birds router

//app.use('/birds',birds)



// listen for requests :)
var listener = app.listen(port, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});
