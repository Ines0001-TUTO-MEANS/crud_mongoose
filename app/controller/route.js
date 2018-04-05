var express = require('express');
var router = express.Router();
var User = require('./user');


// middleware that is specific to this router
/*
router.use(function timeLog(req, res, next) {
  console.log('Time: ', Date.now());
  next();
});
*/
// define the home page route
router.post('/user', User.create);

module.exports = router;