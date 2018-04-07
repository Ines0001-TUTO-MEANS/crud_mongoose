var express = require('express');
var router = express.Router();
var User = require('./user');


// middleware that is specific to this router
var app = express();
app.use(User.myLogger)
// define the home page route
router.post('/user', User.create);

module.exports = router;
