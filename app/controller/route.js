var express = require('express');
var router = express.Router();
var User = require('./user');


// middleware that is specific to this router

// define the home page route
router.post('/user', User.create);
router.get('/verifyEmail/:token', User.verifyEmail);

module.exports = router;
