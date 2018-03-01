var express = require('express'),
    router = express.Router(),
    restify = require('express-restify-mongoose');

var schema = require('../models/Task')

// Using query builder

restify.serve(router, mongoose.model('Tasks', schema ))



module.exports = router