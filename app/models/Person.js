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
    required: 'name is mandatory'
  },
  age: {
    type: Number,
    min:[18, 'age limit 18']
  },
  company: String,
  email: {
    type: String,
    required :'email is mandatory',
    validate: mailValidator
  },
  password: {
    type: String,
    required :'password is mandatory',
  },
  admin: {
    type: Boolean,
    message:'property is not a boolean value',
    default: false
  },
  tasks : [{ type: mongoose.Schema.Types.ObjectId, ref: 'Tasks' }]
});
