(function(app) {
	
  app.factory('AuthServices', ['$q','$resource','$cookies','$mdDialog', function($q,$resource,$cookies,$mdDialog) {
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
        var confirm = $mdDialog.confirm()
                                .title( 'Do you really want to disconnect ?')
                                .ariaLabel('Disconneting')
                                .ok('Yes')
                                .cancel('No');

        return $mdDialog.show(confirm)
                 .then(function(){
                    $cookies.remove('token')
                    auth.user = undefined
                    return $q.resolve({success:true,message:'logout confirm'})
                  
                  },function() {
                    return $q.reject({success:false,message:'logout abort'})
                  });         
        
        
            
      }else{
        $q.reject('logout operation with no authentification') 
      }
    
    
    
    }

    return auth;

	}]);
})(CrudMongoose);