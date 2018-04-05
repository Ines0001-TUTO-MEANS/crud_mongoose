var mongoose = require('mongoose'),
    validate = require('mongoose-validator'),
    bcrypt = require('bcrypt'), // to hash password
    Schema = mongoose.Schema,
    opt = {
            // If set timestamps, mongoose assigns createdAt and updatedAt fields to your schema,
            timestamps:true

          };
/**
 * @module  User
 * @description contain the details of Attribute
 */

var User = new Schema({

    /** 
      userName. It can only contain valid email id, should be unique, is required.
    */
    userName: {
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
  
    /** 
      userFirstname. It can only contain string, is required field.
    */
    userFirstname: {
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
      isVerified. false default.
    */
    isVerified: {
        type: Boolean,
        default: false
    },
    
    /** 
      Optionnal information. not required.
    */                  
    age: {
      type: Number,
      min:[18, 'age limit 18']
    },
    
    company: String,
    
    
    /** 
      password. It can only contain string, is required field.
    */  
    password: {
      type: String,
      required :'password is mandatory',
    },
    
      
    /** 
      admin. false by default.
    */
    admin: {
      type: Boolean,
      message:'property is not a boolean value',
      default: false
    },
    
    tasks : [{ type: mongoose.Schema.Types.ObjectId, ref: 'Tasks' }]

},opt);


/*  Document middleware
    pre save action to allow to apply hash password if told
    schema.pre("save",function(next){...})
*/
function preSavePerson(next){
  var user = this;
  
   // only hash the password if it has been modified (or is new)
  if (!user.isModified('password') || !user.password || user.password.length === 0) {
      return next();
  }
  
  bcrypt.hash(user.password, SALT_WORK_FACTOR, function(err, hash) {
    if(err) return next(err);
    user.password = hash;
          next();
    
  });
}

/*  Document middleware
    pre remove action to allow to test admin user if request delete user
    schema.pre("remove",function(next){...})
*/
function preRemovePerson(next){
  var user = this;
  // not authorized to delete admin user
  if (!user.admin ) {
      return next();
  }
  else{
      var err = new Error('not authorized to delete user');
      
      next(err); 
  }
   
}

Schema.pre("save",preSavePerson);
Schema.pre("remove",preRemovePerson);



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