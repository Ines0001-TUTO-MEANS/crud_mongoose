const request = require('request')

const options = {
  url: 'localhost:3000/api/v1/users',
  qs: {
    select: JSON.stringify({
      name:1
    })
  }
};


request.get(options, function (e, r, user) {
  console.log('error:', e);    
  console.log('users', user)
    })