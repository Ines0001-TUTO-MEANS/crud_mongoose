(function(app) {
	app.service('RegisterService', ['$rootScope', function($rootScope) {
      var registerService =   $rootScope.CrudMongooseGlobal;
      
      this.setLogin = function(user){
        console.log('RegisterService:login',user)
        if(user){
          $rootScope.CrudMongooseGlobal.connecting = true;
          $rootScope.CrudMongooseGlobal.user = $scope.user;
          this.registerService = $rootScope.CrudMongooseGlobal;
        }
        else throw 'Error RegisterService: no user!'
      }
      
      this.setLogout = function(){
        console.log('RegisterService:logout')
        $rootScope.CrudMongooseGlobal.connecting = false;
        $rootScope.CrudMongooseGlobal.user = {};
        this.registerService = $rootScope.CrudMongooseGlobal;
      }
      
	}]);
})(CrudMongoose);