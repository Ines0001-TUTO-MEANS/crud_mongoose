(function(app) {
	app.factory('AuthServices', ['$q', function($q) {
      var auth ={};
    
      auth.login=function(user,password){
        var deferred = $q.defer();
        auth.user = user;
        deferred.resolve({success:true,data:auth.user});
      
        return deferred.promise;
      }
    
      return auth;

	}]);
})(CrudMongoose);