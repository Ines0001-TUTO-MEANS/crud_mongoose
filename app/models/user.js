var mongoose = require('mongoose'),
    validate = require('mongoose-validator'),
    Schema = mongoose.Schema;
    


/**
 * @module  User
 * @description contain the details of Attribute
 */

var User = new Schema({

    /** 
      userName. It can only contain valid email id, should be unique, is required and indexed.
    */
    userName: {
        type: String,
        unique: true,
        required: true
    },

    /** 
      password. It can only contain string, is required field.
    */
    password: {
        type: String,
        required: true
    },

    /** 
    Scope. It can only contain string, is required field, and should have value from enum array.
  */
    scope: {
        type: String,
        enum: ['Customer'],
        required: true
    },

    /** 
      isVerified. false default.
    */
    isVerified: {
        type: Boolean,
        default: false
    }
    
    /** 
      userName. It can only contain valid email id, should be unique, is required and indexed.
    */
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
      unique: true,
      required :'email is mandatory',
      validate: [
          validate({
            validator: 'isEmail',
            message: 'email property is not valid Email',
          })
      ]
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

User.statics.saveUser = function(requestData, callback) {
    this.create(requestData, callback);
};

User.statics.updateUser = function(user, callback) {
    user.save(callback);
};

User.statics.findUser = function(userName, callback) {
    this.findOne({
        userName: userName
    }, callback);
};

User.statics.findUserByIdAndUserName = function(id, userName, callback) {
    this.findOne({
        userName: userName,
        _id: id
    }, callback);
};

var user = mongoose.model('user', User);

/** export schema */
module.exports = {
    User: user
};