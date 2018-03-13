(function(app) {
	app.factory('AuthServices', ['$q','User_factory','$cookies', function($q,$cookies,User_factory) {
      var auth ={};
    
      auth.login=function(user,password){
        var deferred = $q.defer();
        
        var user_login = new User_factory(user)
      
        user_login.$authenticate(function(data){
          if(data.success){      

            // use RegisterService to centralize login state
            AuthService.setAuthorized( $scope.user,data.token)
          }
        }
        
        auth.user = user;
        deferred.resolve({success:true,data:auth.user});
      
        return deferred.promise;
      }
    
      return auth;

	}]);
})(CrudMongoose);