// server.js
// where your node app starts
const express = require('express');

const app = express();
// module api routing





const port = process.env.PORT || 3000;

/// configuration ===============================================================

app.use('/cars', require('./app/routes/cars'))
app.use('/', require('./app/routes/bus'))




// listen for requests :)
var listener = app.listen(port, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});
