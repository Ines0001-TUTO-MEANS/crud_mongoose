var express = require('express'),
    router = express.Router(),
    restify = require('express-restify-mongoose');

var schema_person = require('../models/Person')

// Using query builder

restify.serve(router, mongoose.model('Users', schema_person ))



module.exports = router