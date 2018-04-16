var express = require('express')
    ,router = express.Router()
    ,mongoose = require('mongoose')
    ,restify = require('express-restify-mongoose')
    ,Boom = require('boom');
   
var User = require('../controller/user');
var schema = require('../models/Task')

// Using query builder


router.use('api/V1',User.loginRequired);
restify.serve(router, mongoose.model('Tasks', schema ))

module.exports = router

/*
// route middleware to verify a token

router.use(function(req, res, next) {

  // check header or url parameters or post parameters for token
  var token = req.body.token || req.query.token || req.headers['x-access-token'];
  // decode token
  if (token) {

    // verifies secret and checks exp
    jwt.verify(token, 'superSecret', function(err, decoded) {      
      if (err) {

        next(Boom.unauthorized('The request has not been applied because it lacks valid authentication credentials for the target resource.'));
         

      } else {
        // if everything is good, save to request for use in other routes
        req.decoded = decoded;    
        next();
      }
    });

  } else {

    // if there is no token
    // return an error
    next(Boom.forbidden('No token provided.'));    

  }
});
*/