// User.js
var mongoose = require('mongoose')
var validate = require('mongoose-validator')

var mailValidator = [
  validate({
    validator: 'isEmail',
    message: 'email property is not valid Email',
  })]


module.exports =  mongoose.Schema({  
  name: {
    type: String,
    access: 'protected',
    required: 'name is mandatory'
  },
  age: {
    type: Number,
    access: 'protected',
    required :'age is mandatory',
    min:[18, 'age limit 18']
  },
  company: String,
  email: {
    type: String,
    access: 'protected',
    validate: mailValidator
  },
  password: {
    type: String,
    access: 'protected'
  },
  admin: {
    type: Boolean,
    access: 'protected',
    message:'property is not a boolean value',
    default: false
  },
  tasks : [{ type: mongoose.Schema.Types.ObjectId, ref: 'Tasks' }]
});
