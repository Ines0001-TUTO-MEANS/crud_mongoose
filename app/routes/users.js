var express = require('express'),
    router = express.Router(),
    mongoose = require('mongoose'),
    restify = require('express-restify-mongoose');

var schema = require('../models/Person')
var options = {
  
  access: function(req) {
    return 'protected';
  },
  protected: ['name', 'age', 'email', 'password','admin']
      
}
// Using query builder

restify.serve(router, mongoose.model('Users', schema ), options)



module.exports = router