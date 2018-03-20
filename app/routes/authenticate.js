//================================== routes for API AUTHENTICATE ====================================
const AUTHENTICATE_TOKEN_LAPS = 60*60 // expires in 10 minutes
var express = require('express')
  , router = express.Router()
  ,	mongoose = require('mongoose')
  , jwt    = require('jsonwebtoken') // used to create, sign, and verify tokens
  , bcrypt = require('bcrypt') // to hash/compare password
  ,	schema = require('../models/Person')


// post authenticate
router.post('/authenticate', function(request, response) {
  

	var User = mongoose.model('Users', schema )
  User.findOne({email:request.body.email},function(err,user){
		if (err) throw err;

    if (!user) {
        response.json({ success: false, message: 'Authentication failed. User not found.' });
    } else {
      // check if password matches
      // Load hash from your password DB.
      bcrypt.compare(request.body.password, user.password, function(err, res) {
        if (err) throw err;
        if (res) {
          var payload = {user: user.email};
          var d = new Date();
          var expires = new Date();
          expires.setMinutes(d.getMinutes()+1);
          var token = jwt.sign({
                  iss: user.email,
                  exp: expires
          },'superSecret');

          response.json({ success: true, message: 'Good your token JWT:',{
                                        token : token,
                                        expires: expires,
                                        user: user.email
                                        }
          });
          
        }else{
          response.json({ success: false, message: 'Authentication failed. Wrong password.' });
        }          
        
        
      });
    // End if/else section after find user
    }
  // End findOne callback 
	})
// End authenticate post callback 
})




module.exports = router