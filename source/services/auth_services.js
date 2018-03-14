(function(app) {
	
  app.factory('AuthServices', ['$q','$resource','$cookies','$mdDialog', function($q,$resource,$cookies,$mdDialog) {
    var auth ={};
    
    var User = $resource('api/authenticate',undefined,{'authenticate': {method:'POST'}});

    
    auth.isAuthenticated = function(){
      return !(typeof auth.user === 'undefined')
    
    }
    
    auth.login = function(user){
      var deferred = $q.defer();

      User.authenticate(user,function(data){
        if(data.success && data.token){      
          /* Add token in cookies client
          Use by config.headers['x-access-token'] in request $http
          instanciate to app.config.js
          */
          $cookies.put('token',data.token)
          $cookies.put('user',user.email)
      
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
                    /* Confirm to logout session
                       Remove cookies user and token and
                       init auth.user = undefined
                    */
                    $cookies.remove('token') 
                    $cookies.remove('user')
                    auth.user = undefined
                    
                    /* return promise resolve for
                       response chaining call
                    */
                    return $q.resolve({success:true,message:'logout confirm'})
                  
                  },function() {
                    /* return promise reject for
                       response chaining call
                       no changing
                    */
                    return $q.reject({success:false,message:'logout abort'})
                  });         
        
        
            
      }else{
        $q.reject({success:false,message:'operation logout without auth.user and no cookies token'}) 
      }
    
    
    
    }

    return auth;

	}]);
})(CrudMongoose);