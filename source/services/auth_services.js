(function(app) {
	
  app.factory('AuthServices', ['GLOBAL','$q','$resource','$cookies','$mdDialog', function(GLOBAL,$q,$resource,$cookies,$mdDialog) {
    var auth ={};
    
    var User = $resource('/login',undefined,{'authenticate': {method:'POST'}});

    
    auth.isAuthenticated = function(){
      return !(typeof auth.user === 'undefined')
    
    }
    
    auth.login = function(user){
      var deferred = $q.defer();
      
      User.authenticate(user,function(data){
        
        if(data.token && data.username){      
          /* Add token in cookies client
          Use by config.headers['x-access-token'] in request $http
          instanciate to app.config.js
          */
          var expires = moment().add(GLOBAL.COOKIES_DELAY_MINUTES,'minutes').add(GLOBAL.COOKIES_DELAY_HOURS,'hours').toDate();
          
          $cookies.put('token',data.token,{expires : expires ,secure:true})
          $cookies.put('user',data.username,{expires : expires ,secure:true})
      
          auth.user = user
          deferred.resolve(data)
        }else{
          console.log('User.authenticate:',data)
          deferred.reject(data)
        }

      },function(error){
        deferred.reject(error.data)
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
        auth.user = undefined;
        return $q.reject({success:false,message:'operation logout without auth.user and no cookies token'}) 
      }
    
    
    
    }

    return auth;

	}]);
})(CrudMongoose);