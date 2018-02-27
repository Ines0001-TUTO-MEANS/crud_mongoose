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
    required :'age is mandatory',
    min:[18, 'age limit 18']
  },
  company: String,
  email: {
    type: String,
    validate: mailValidator
  },
  password: String,
  admin: {
    type: Boolean,
    message:'property is not a boolean value',
    default: false
  },
  tasks : [{ type: mongoose.Schema.Types.ObjectId, ref: 'Tasks' }]
});
