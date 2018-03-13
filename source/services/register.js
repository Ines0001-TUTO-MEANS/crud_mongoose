(function(app) {
	app.service('RegisterService', ['$rootScope','$cookies', function($rootScope,$cookies) {
      var registerService =   $rootScope.CrudMongooseGlobal;
      
      this.setLogin = function(user,token){
        console.log('RegisterService:login',user,token)
        if(user && token){
          /* Add token in cookies client
            Use by config.headers['x-access-token'] in request $http
            instanciate to app.config.js
          */
          $cookies.put('token',data.token)
          
          $rootScope.CrudMongooseGlobal.connecting = true;
          $rootScope.CrudMongooseGlobal.user = $scope.user;
          this.registerService = $rootScope.CrudMongooseGlobal;
        }
        else throw 'Error RegisterService: no user!'
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
        else throw 'Error RegisterService: no user!'
      }
      
	}]);
})(CrudMongoose);