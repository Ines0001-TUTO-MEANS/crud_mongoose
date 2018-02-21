// User.js
var mongoose = require('mongoose');  
module.exports =  mongoose.Schema({  
  name: {
    type: String,
    required: 'name is mandatory'
  },
  company: String,
  email: String,
  password: String
});
