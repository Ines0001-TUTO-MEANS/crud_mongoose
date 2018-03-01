var express = require('express'),
    router = express.Router(),
    mongoose = require('mongoose'),
    restify = require('express-restify-mongoose');

var schema = require('../models/Person')

// Using query builder

restify.serve(router, mongoose.model('Users', schema ))



module.exports = router