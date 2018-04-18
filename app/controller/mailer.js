var nodemailer = require("nodemailer")
    // the path module provides utilities for working with file and directory paths.
    ,path = require('path')
    // This plugin works with nodemailer 4.x. And uses the express-handlebars view engine to generate html emails.
    ,hbs = require('nodemailer-express-handlebars')
    ,Promise  = require('promise')
    ,Config = require('../config/config');

// create reusable transport method (opens pool of SMTP connections)
var auth = {
    type: 'oauth2',
    user: Config.email.username,
    clientId: Config.key.clientId,
    clientSecret: Config.key.clientSecret,
    refreshToken: Config.key.refreshToken,
};

var smtpTransport = nodemailer.createTransport({
    service: 'gmail',
    auth: auth,
});

// Access model template
var handlebarsOptions = {
  viewEngine: 'handlebars',
  viewPath: path.resolve('./app/templates/'),
  extName: '.html'
};

smtpTransport.use('compile', hbs(handlebarsOptions));


exports.decrypt = function(password) {
    return decrypt(password);
};

exports.encrypt = function(password) {
    return encrypt(password);
};

exports.sentMailVerificationLink = function(user,token) {
      return new Promise(function (resolve, reject) {
        
        var mailOptions = {
            from: Config.email.accountName, // sender address
            to: user, // list of receivers
            subject: "Account Verification", // Subject line
            //text: result.price, // plaintext body
            //html: mailbody  // html body
            template: 'send-verification-link-email',
            context: {
              url: 'http://localhost:3000/auth/reset_password?token=' + token,
              name: user.fullName.split(' ')[0]
            }
        };
        
        mail(mailOptions).then(function(data){
          resolve(data);
        },function(error){
          reject(error);
        })
 
      });      
};

exports.sentMailForgotPassword = function(user) {
    return new Promise(function (resolve, reject) {
      var from = Config.email.accountName;
      var mailbody = "<p>Your "+Config.email.accountName+"  Account Credential</p><p>username : "+user.email+" , password : "+decrypt(user.password)+"</p>"
      mail(from, user.email , "Account password", mailbody).then(function(data){
        resolve(data);
      },function(error){
        reject(error);
      })
    });
};


// method to decrypt data(password) 
function decrypt(password) {
    
    return password;
}

// method to encrypt data(password)
function encrypt(password) {
    
    return password;
}



function mail(from, email, subject, mailbody){
    var mailOptions = {
        from: from, // sender address
        to: email, // list of receivers
        subject: subject, // Subject line
        //text: result.price, // plaintext body
        //html: mailbody  // html body
        template: 'send-verification-link-email',
        context: {
          url: 'http://localhost:3000/auth/reset_password?token=' + token,
          name: user.fullName.split(' ')[0]
        }
    };

    
  
  return new Promise(function (resolve, reject) {
    smtpTransport.sendMail(mailOptions, function(error, response) {
      if (error) {
        reject(error);
      }else{
        smtpTransport.close(); // shut down the connection pool, no more messages
        resolve({message:'success send mail'});
      }
    });
  }) 
      
   
}