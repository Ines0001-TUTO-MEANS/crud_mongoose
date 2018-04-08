var express = require('express');
var router = express.Router();
var User = require('./user');


// middleware that is specific to this router

// define the home page route
router.post('/user', User.create);
router.post('/verifyEmail', User.verifyEmail);

module.exports = router;
