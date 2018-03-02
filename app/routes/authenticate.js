//================================== routes for API AUTHENTICATE ====================================

var express = require('express')
  , router = express.Router()

// post authenticate
router.post('/authenticate', function(req, res) {
  res.send({
          success: true,
          message: 'Enjoy your token!',
          body: req.body
        })
})



module.exports = router