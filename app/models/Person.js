// User.js
var mongoose = require('mongoose')
var validate = require('mongoose-validator')

var ageValidator = [
  validate({
    validator: 'isInt',
    message: 'Age must be an integer value',
  }),
  
]


module.exports =  mongoose.Schema({  
  name: {
    type: String,
    required: 'name is mandatory'
  },
  age: {
    type: Number,
    required :'age is mandatory',
    validate: ageValidator
  },
  company: String,
  email: String,
  password: String
});
