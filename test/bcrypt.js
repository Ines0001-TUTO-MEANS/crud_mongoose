const SALT_WORK_FACTOR = 13;

var bcrypt = require('bcrypt') // to hash password

bcrypt.hash(user.password, SALT_WORK_FACTOR, function(err, hash) {
    if(err) return next(err);
    user.password = hash;
          next();
    
  });