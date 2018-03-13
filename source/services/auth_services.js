(function(app) {
	app.factory('AuthServices', ['$q','User_factory','$cookies', function($q,$cookies,User_factory) {
      var auth ={};
    
      auth.login=function(user){
        var deferred = $q.defer();
        
        var userMongoDB = new User_factory({email:"sddsd@kjkh",password:"ines"})
      
        userMongoDB.$authenticate(function(data){
          if(data.success){      
            /* Add token in cookies client
            Use by config.headers['x-access-token'] in request $http
            instanciate to app.config.js
            */
            $cookies.put('token',data.token)
            auth.user = user
            deferred.resolve(data.message)
          }else{
            deferred.reject(data.message)
          }
        
        })
        return deferred.promise;
      }
      return auth;

	}]);
})(CrudMongoose);