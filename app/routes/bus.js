var express = require('express')
  , router = express.Router()

// Car brands page
router.get('/bus', function(req, res) {
  res.send('E big Bus')
})



module.exports = router