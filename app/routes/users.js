var express = require('express'),
    router = express.Router(),
    mongoose = require('mongoose'),
    restify = require('express-restify-mongoose');

var schema = require('../models/Person')
var options = {
  access: function(req) {
      if (req.isAuthenticated() && req.method.toLowerCase() === 'post') {
        return 'protected';
      } else {
        return 'public';
      }
}
// Using query builder

restify.serve(router, mongoose.model('Users', schema ))



module.exports = router