var Config = require('../config/config')
    ,Jwt = require('jsonwebtoken')
    ,Boom = require('boom')
    ,Mailer = require('./mailer')
    ,Config = require('../config/config')
    ,User = require('../models/user').User;

var privateKey = Config.key.privateKey;
var tokenExpiry = Config.key.tokenExpiry;

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
    //res.send("account sucessfully verified");
    // verifies secret and checks exp
    
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
          
          
          
          })
      }
    });  
    
  
  /*
    Jwt.verify(request.headers.authorization.split(" ")[1], privateKey, function(err, decoded) {
        if(decoded === undefined) return reply(Boom.forbidden("invalid verification link"));
        if(decoded.scope[0] != "Customer") return reply(Boom.forbidden("invalid verification link"));
        User.findUserByIdAndUserName(decoded.id, decoded.userName, function(err, user){
            if (err) {
                console.error(err);
                return reply(Boom.badImplementation(err));
            }
            if (user === null) return reply(Boom.forbidden("invalid verification link"));
            if (user.isVerified === true) return reply(Boom.forbidden("account is already verified"));
            user.isVerified = true;
            User.updateUser(user, function(err, user){
                if (err) {
                    console.error(err);
                    return reply(Boom.badImplementation(err));
                }
                return reply("account sucessfully verified");

            })
        })

    });
    */
};




/*

exports.login = function(req, res, next) {
        User.findUser(request.payload.userName, function(err, user) {
            if (!err) {
                if (user === null) return reply(Boom.forbidden("invalid username or password"));
                if (request.payload.password === Common.decrypt(user.password)) {

                    if(!user.isVerified) return reply("Your email address is not verified. please verify your email address to proceed");

                    var tokenData = {
                        userName: user.userName,
                        scope: [user.scope],
                        id: user._id
                    };
                    var res = {
                        username: user.userName,
                        scope: user.scope,
                        token: Jwt.sign(tokenData, privateKey)
                    };

                    reply(res);
                } else reply(Boom.forbidden("invalid username or password"));
            } else {
                if (11000 === err.code || 11001 === err.code) {
                    reply(Boom.forbidden("please provide another user email"));
                } else {
                        console.error(err);
                        return reply(Boom.badImplementation(err));
                } 
            }
        });
    }


exports.resendVerificationEmail = {
    validate: {
        payload: {
            userName: Joi.string().email().required(),
            password: Joi.string().required()
        }
    },
    handler: function(request, reply) {
        User.findUser(request.payload.userName, function(err, user) {
            if (!err) {
                if (user === null) return reply(Boom.forbidden("invalid username or password"));
                if (request.payload.password === Common.decrypt(user.password)) {

                    if(user.isVerified) return reply("your email address is already verified");

                     var tokenData = {
                        userName: user.userName,
                        scope: [user.scope],
                        id: user._id
                    };
                    Common.sentMailVerificationLink(user,Jwt.sign(tokenData, privateKey));
                    reply("account verification link is sucessfully send to an email id");
                } else reply(Boom.forbidden("invalid username or password"));
            } else {                
                console.error(err);
                return reply(Boom.badImplementation(err));
            }
        });
    }
};

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

exports.verifyEmail = {
    handler: function(request, reply) {
        Jwt.verify(request.headers.authorization.split(" ")[1], privateKey, function(err, decoded) {
            if(decoded === undefined) return reply(Boom.forbidden("invalid verification link"));
            if(decoded.scope[0] != "Customer") return reply(Boom.forbidden("invalid verification link"));
            User.findUserByIdAndUserName(decoded.id, decoded.userName, function(err, user){
                if (err) {
                    console.error(err);
                    return reply(Boom.badImplementation(err));
                }
                if (user === null) return reply(Boom.forbidden("invalid verification link"));
                if (user.isVerified === true) return reply(Boom.forbidden("account is already verified"));
                user.isVerified = true;
                User.updateUser(user, function(err, user){
                    if (err) {
                        console.error(err);
                        return reply(Boom.badImplementation(err));
                    }
                    return reply("account sucessfully verified");

                })
            })
            
        });
    }
};
*/