var express = require('express');
var router = express.Router();
var User = require('./user');


// middleware that is specific to this router

// define the home page route
router.post('/user', User.loginRequired, User.create);
router.get('/verifyEmail/:token', User.verifyEmail);
router.post('/resendVerificationEmail', User.resendVerificationEmail);
router.post('/login', User.login);




module.exports = router;
