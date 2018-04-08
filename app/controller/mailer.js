var nodemailer = require("nodemailer")
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



exports.decrypt = function(password) {
    return decrypt(password);
};

exports.encrypt = function(password) {
    return encrypt(password);
};

exports.sentMailVerificationLink = function(user,token) {
      return new Promise(function (resolve, reject) {
        var from = Config.email.accountName;
        var mailbody = "<p>Thanks for Registering on "+Config.email.accountName+" </p><p>Please verify your email by clicking on the verification link below.<br/><a href='"+Config.server.host+"/"+Config.email.verifyEmailUrl+"/"+token+"'>Verification Link</a></p>"
        console.log(from,user.email,mailbody)
        mail(from, user , "Account Verification", mailbody).then(function(data){
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
        html: mailbody  // html body
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