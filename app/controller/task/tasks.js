var express = require('express')
    ,router = express.Router()
    ,mongoose = require('mongoose')
    ,restify = require('express-restify-mongoose')
    ,Boom = require('boom');

var schema = require('../models/Task')

// Using query builder



var loginRequired (req, res, next) {
  if (req.headers['x-access-token'] || req.body.token || req.query.token) {
    next();
  } else {
    return next(Boom.forbidden('No token provided')); // HTTP 403
  }
};

router.use(loginRequired);
restify.serve(router, mongoose.model('Tasks', schema ))

module.exports = router