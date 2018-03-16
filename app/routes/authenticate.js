//================================== routes for API AUTHENTICATE ====================================

var express = require('express')
  , router = express.Router()
  ,	mongoose = require('mongoose')
  , jwt    = require('jsonwebtoken') // used to create, sign, and verify tokens

  ,	schema = require('../models/Person')


// post authenticate
router.post('/authenticate', function(req, res) {
  

	var User = mongoose.model('Users', schema )


	User.findOne({email:req.body.email},function(err,user){
		if (err) throw err;

    if (!user) {
        res.json({ success: false, message: 'Authentication failed. User not found.' });
    } else if (user) {
      // check if password matches
    if (user.password != req.body.password | !user.password) {
      res.json({ success: false, message: 'Authentication failed. Wrong password.' });
    } else {
      const payload = {
          user: user.email
        };
          var token = jwt.sign(payload, 'superSecret', {

            expiresIn: 60*10 // expires in 10 minutes
          });

      res.json({ success: true, message: 'Good your token JWT.',token:token });	
    }

    }


	})
})




module.exports = router