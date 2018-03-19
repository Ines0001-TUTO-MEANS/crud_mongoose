
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
  findOneAndRemove: false,
  //preUpdate:preUpdatePerson,
  access: function(req) {
    return 'protected';
  },
  onError: onErrorRestify,
  protected: ['name', 'age', 'email', 'password','admin']
  
      
}
// Definition functions Section

function onErrorRestify(err, req, res, next){
  const statusCode = req.erm.statusCode // 400 or 404
  
  res.status(400).json({success:false,message:err.message})
  
}


/*  Document middleware
    pre save action to allow to apply hash password if told
    schema.pre("save",function(next){...})
*/
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

/*  Document middleware
    pre remove action to allow to test admin user if request delete user
    schema.pre("remove",function(next){...})
*/
function preRemovePerson(next){
  var user = this;
  // not authorized to delete admin user
  if (!user.admin ) {
      return next();
  }
  else{
      var err = new Error('not authorized to delete user');
      console.log('preRemovePerson, error:',err.message)
      next(err); 
  }
   
}

schema.pre("save",preSavePerson);
schema.pre("remove",preRemovePerson);

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