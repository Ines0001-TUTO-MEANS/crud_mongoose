var express = require('express'),
    router = express.Router(),
    mongoose = require('mongoose'),
    restify = require('express-restify-mongoose');

var schema = require('../models/Person')
var options = {
  prereq: function(req) {
      if (!req.isAuthenticated()) {
        return false;
      }

      if (req.method.toLowerCase() === 'post') {
        req.body.user = req.user._id.toHexString();
      }

      return true;
    },
  access: function(req) {
    if (req.isAuthenticated() && req.method.toLowerCase() === 'post') {
      return 'protected';
    } else {
      return 'public';
    }
  },
  protected: ['name', 'age', 'email', 'password','admin']
      
}
// Using query builder

restify.serve(router, mongoose.model('Users', schema ), options)



module.exports = router