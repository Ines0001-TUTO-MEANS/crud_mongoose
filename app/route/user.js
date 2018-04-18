'use strict';

module.exports = function(app){
  var User = require('../controller/user');

  
  app.route('/user')
      .post(User.create)
  app.route('/verifyEmail/:token')
      .get(User.verifyEmail);
  app.route('/resendVerificationEmail')
      .post(User.resendVerificationEmail);
  app.route('/login')
      .post(User.login);
  /*
  app.route('/forgot_password')
      .get(User.render_forgot_password_template)
      .post(User.forgot_password);
  */
  
}
