var express = require('express')
var router = express.Router()

router.use(function timeLog(req,res,next){
  console.log('Time:', Date.now());
  next();
})

router.get('/birds',function(req,res){
  res.send('Birds home Page')
})

router.get('/birds/about',function(req,res){
  res.send('Birds about Page')
})

module.exports = router;