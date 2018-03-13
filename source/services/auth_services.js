(function(app) {
	
  app.factory('AuthServices', ['$q','$resource','$cookies', function($q,$resource,$cookies) {
    var auth ={};

    var User = $resource('api/authenticate',undefined,{'authenticate': {method:'POST'}});

    auth.login = function(user){
      var deferred = $q.defer();

      User.authenticate(user,function(data){
        if(data.success && data.token){      
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
    
    auth.logout = function(){
      if( auth.user && $cookies.get('token')){
         $cookies.remove('token')
         auth.user = {}
        
      }
    
    
    
    }

    return auth;

	}]);
})(CrudMongoose);