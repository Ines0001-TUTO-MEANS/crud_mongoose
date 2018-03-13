(function(app) {
	app.factory('AuthServices', ['$q', function($q) {
      var auth ={};
    
      this.auth.login=function(user,password){
        var deferred = $q.defer();
        
        deferred.resolve('authentification success');
      
        return deferred.promise;
      }
    
      return auth;

	}]);
})(CrudMongoose);