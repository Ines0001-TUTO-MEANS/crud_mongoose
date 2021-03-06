// User.js
var mongoose = require('mongoose')
var validate = require('mongoose-validator')

var mailValidator = [
  validate({
    validator: 'isEmail',
    message: 'email property is not valid Email',
  })]


module.exports =  mongoose.Schema({  
  updated_at: { type: Date },
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
},{
  // If set timestamps, mongoose assigns createdAt and updatedAt fields to your schema,
  timestamps:true

});
