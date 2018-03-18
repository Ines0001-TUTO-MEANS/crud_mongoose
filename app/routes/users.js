
const SALT_WORK_FACTOR = 13;

var express = require('express')
    ,router = express.Router()
    ,mongoose = require('mongoose')
    ,restify = require('express-restify-mongoose')
    ,jwt    = require('jsonwebtoken') // used to create, sign, and verify tokens
    ,bcrypt = require('bcrypt') // to hash password


var schema = require('../models/Person')
var options = {
  findOneAndUpdate: false,
  //preUpdate:preUpdatePerson,
  access: function(req) {
    return 'protected';
  },
  protected: ['name', 'age', 'email', 'password','admin']
  
      
}
// Definition functions Section
function preSavePerson(next){
  var user = this;
  
   // only hash the password if it has been modified (or is new)
  if (!user.isModified('password') || !user.password || user.password.length === 0) {
      return next();
  }
  
  bcrypt.hash(user.password, SALT_WORK_FACTOR, function(err, hash) {
    if(err) return next(err);
    user.password = hash;
          next();
    
  });
}
// route middleware to verify a token
router.use(function(req, res, next) {

  // check header or url parameters or post parameters for token
  var token = req.body.token || req.query.token || req.headers['x-access-token'];
  // decode token
  if (token) {

    // verifies secret and checks exp
    jwt.verify(token, 'superSecret', function(err, decoded) {      
      if (err) {

        return res.status(401).send({ 
                    success: false, 
                    message: 'UNAUTHORIZED.The request has not been applied because it lacks valid authentication credentials for the target resource.' 
                });
         

      } else {
        // if everything is good, save to request for use in other routes
        req.decoded = decoded;    
        next();
      }
    });

  } else {

    // if there is no token
    // return an error
    return res.status(403).send({ 
        success: false, 
        message: 'No token provided.' 
    });

  }
});


restify.serve(router, mongoose.model('Users', schema.pre("save",preSavePerson) ), options)




module.exports = router