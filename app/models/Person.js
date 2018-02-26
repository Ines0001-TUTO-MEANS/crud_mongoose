// User.js
var mongoose = require('mongoose')
var validate = require('mongoose-validator')

var nameValidator = [
  validate({
    validator: 'isLength',
    arguments: [18, 99],
    message: 'Name should be between {ARGS[0]} and {ARGS[1]} characters',
  }),
  validate({
    validator: 'isAlphanumeric',
    passIfEmpty: true,
    message: 'Name should contain alpha-numeric characters only',
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
    min: [18, 'too young'],
    max: 99
  },
  company: String,
  email: String,
  password: String
});
