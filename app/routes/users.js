var express = require('express')
    ,router = express.Router()
    ,mongoose = require('mongoose')
    ,restify = require('express-restify-mongoose')
    , jwt    = require('jsonwebtoken') // used to create, sign, and verify tokens


var schema = require('../models/Person')
var options = {
  
  access: function(req) {
    return 'protected';
  },
  protected: ['name', 'age', 'email', 'password','admin']
  
      
}
// Definition functions Section
function preSavePerson(next){
    if(this.password){
      console.log('Avant la validation du document')
      
    }
   
    next();
}

// Definition functions End Section

// Utilisation du Middlewares de Mongoose
// Operation de hashing sur la création de user
schema.pre("save",preSavePerson);


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


restify.serve(router, mongoose.model('Users', schema ), options)




module.exports = router