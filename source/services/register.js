(function(app) {
	app.service('RegisterService', ['$rootScope','$cookies','$mdDialog', function($rootScope,$cookies,$mdDialog) {
      var registerService =   $rootScope.CrudMongooseGlobal;
      
      this.getUser = function(){
        if(registerService.user) return registerService.user.email
      
      }
    
      this.setLogin = function(user,token){
        console.log('RegisterService:login',user,token)
        if(user && token){
          /* Add token in cookies client
            Use by config.headers['x-access-token'] in request $http
            instanciate to app.config.js
          */
          $cookies.put('token',token)
          
          $rootScope.CrudMongooseGlobal.connecting = true;
          $rootScope.CrudMongooseGlobal.user = user;
          this.registerService = $rootScope.CrudMongooseGlobal;
        }
        else throw 'Error RegisterService(setLogin): no user or no token!'
      }
      
      this.setLogout = function(){
        console.log('RegisterService:logout')
        if( registerService.user && $cookies.get('token')){
          /* Add token in cookies client
              Use by config.headers['x-access-token'] in request $http
              instanciate to app.config.js
            */
          $cookies.remove('token')

          $rootScope.CrudMongooseGlobal.connecting = false;
          $rootScope.CrudMongooseGlobal.user = {};
          this.registerService = $rootScope.CrudMongooseGlobal;
        }
        else throw 'Error RegisterService(setLogout): no user or non token !'
      }
      
	}]);
})(CrudMongoose);