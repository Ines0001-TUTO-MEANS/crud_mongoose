const request = require('request')

request.get({
  url: '/api/v1/Model',
  qs: {
    query: JSON.stringify({
      $or: [{
        name: '~Another'
      }, {
        $and: [{
          name: '~Product'
        }, {
          price: '<=10'
        }]
      }],
      price: 20
    })
  }
})