(function(app) {
	app.controller('ToolbarController', ['$scope','$state','AuthServices','$rootScope', function($scope,$state,AuthServices,$rootScope) {
    console.log('ToolbarController')
    
    $scope.logout = function(){
      
      AuthServices.logout().then(function(){
          $rootScope.CrudMongooseGlobal.connecting = false;
          $state.go('home',undefined,{reload:true})
      },function(){
      
      })

      
      
      
    }
    
	}]);
})(CrudMongoose);