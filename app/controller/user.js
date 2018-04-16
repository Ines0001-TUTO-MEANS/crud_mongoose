var Config = require('../config/config')
    ,Jwt = require('jsonwebtoken')
    ,Boom = require('boom')
    ,bcrypt = require('bcrypt') // to hash password
    ,Mailer = require('./mailer')
    ,Config = require('../config/config')
    ,User = require('../models/user').User;

var privateKey = Config.key.privateKey;
var tokenExpiry = Config.key.tokenExpiry;


exports.loginRequired = function(req, res, next) {
  var token = (req.headers['x-access-token'] || req.body.token || req.query.token)
  if (token) {

      // verifies secret and checks exp
      Jwt.verify(token, privateKey, function(err, decoded) {      
        if (err) {

          return next(Boom.unauthorized('The request has not been applied because it lacks valid authentication credentials for the target resource.')); // HTTP 401

        } else {
          // if everything is good, save to request for use in other routes
          res.append('decoded', 'userName='+decoded.userName+'; scope='+decoded.scope);  
          next();
        }
      });

    } else {

      // if there is no token
      // return an error
      return next(Boom.unauthorized('The request has not been applied because it lacks valid authentication credentials for the target resource.')); // HTTP 401

    }

};


exports.create = function(req, res, next) {
    
    User.saveUser(req.body, function(err, user) {
        if (!err) {
          var expires = tokenExpiry
              ,payload = {
                  userName: user.userName,
                  scope: [user.scope],
                  id: user._id
              };
          
          var token = Jwt.sign(payload,privateKey,{ expiresIn: expires });

          Mailer.sentMailVerificationLink(user.userName,token).then(function(data){
                res.send('Please confirm your email id by clicking on link in email');
              },function(error){
                next(Boom.notFound(error)); // HTTP 404
                
          });
          
        } else {
            if (11000 === err.code || 11001 === err.code) {
                  next(Boom.forbidden("please provide another user email"));
              } else{
                  next(Boom.forbidden(err)); // HTTP 403
              }
         
        }
    });
};


exports.verifyEmail = function(req, res, next) {
    var token = req.params.token;
    // if token param not present automatic 404 error respond because the routing must /verifyEmail:token
         
  
    Jwt.verify(token, privateKey, function(err, decoded) {      
      if(decoded === undefined) return next(Boom.forbidden("invalid verification link"));
      if(decoded.scope[0] != "Customer") return next(Boom.forbidden("invalid verification link"));
      if (!err) {
          User.findUserByIdAndUserName(decoded.id, decoded.userName, function(err, user){
            if (err) {
                return next(Boom.badImplementation(err));
            } 
            if (user === null) return next(Boom.forbidden("invalid verification link"));
            if (user.isVerified === true) return next(Boom.forbidden("account is already verified"));
            user.isVerified = true;
            User.updateUser(user, function(err, user){
              if (err) {
                return next(Boom.badImplementation(err));
              }
              res.send("account sucessfully verified");
            })
          
          
          })
      }
    });  
 
};

exports.resendVerificationEmail = function(req, res, next) {
    var username = req.body.userName
        ,password = req.body.password;
    
    // username and password is required
    if( username===undefined || password ===undefined ) return next(Boom.forbidden("invalid username or password"))
    
    User.findUser(username, function(err, user) {
        if (!err) {
            if (user === null) return next(Boom.forbidden("invalid username or password"));
            if(user.isVerified) return res.send("your email address is already verified");
            bcrypt.compare(password, user.password, function(err, result) {
              if (err) next(err)
              if (!result) return next(Boom.forbidden("invalid username or password"));
              else{
                
                var expires = tokenExpiry
                    ,payload = {
                      userName: user.userName,
                      scope: [user.scope],
                      id: user._id
                    };

                var token = Jwt.sign(payload,privateKey,{ expiresIn: expires });
                Mailer.sentMailVerificationLink(user.userName,token).then(function(data){
                      res.send('Please confirm your email id by clicking on link in email');
                    },function(error){
                      next(Boom.notFound(error)); // HTTP 404
                });
              
              
              }
            
            })
            
        } else {                
            return next(Boom.badImplementation(err));
        }
    });
}

exports.login = function(req, res, next) {
    var username = req.body.userName
        ,password = req.body.password;
     // username and password is required
    if( username===undefined || password ===undefined ) return next(Boom.forbidden("invalid username or password"))
   
    User.findUser(username, function(err, user) {
        if (!err) {
            if (user === null) return next(Boom.forbidden("invalid username or password"));
            
            bcrypt.compare(password, user.password, function(err, result) {
              if (err) next(err)
              if (!result) return next(Boom.forbidden("invalid username or password"));
              if(!user.isVerified) return res.json({message:'Your email address is not verified. please verify your email address to proceed'});
              
              var expires = tokenExpiry
                  ,payload = {
                    userName: user.userName,
                    scope: [user.scope],
                    id: user._id
                  };

              var reply = {
                username: user.userName,
                scope: user.scope,
                token: Jwt.sign(payload,privateKey,{ expiresIn: expires })
              };
              res.json(reply)
              
            })
            
        } else {                
            if (11000 === err.code || 11001 === err.code) {
                  next(Boom.forbidden("please provide another user email"));
              } else{
                  next(Boom.forbidden(err)); // HTTP 403
              }
        }
    });
}

/*


exports.forgotPassword = {
    validate: {
        payload: {
            userName: Joi.string().email().required()
        }
    },
    handler: function(request, reply) {
        User.findUser(request.payload.userName, function(err, user) {
            if (!err) {
                if (user === null) return reply(Boom.forbidden("invalid username"));
                Common.sentMailForgotPassword(user);
                reply("password is send to registered email id");
            } else {       
                console.error(err);
                return reply(Boom.badImplementation(err));
             }
        });
    }
};


*/