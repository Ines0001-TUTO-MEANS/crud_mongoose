(function(app) {
	app.controller('ToolbarController', ['$scope','$state','AuthServices','$rootScope', function($scope,$state,AuthServices,$rootScope) {
    console.log('ToolbarController')
    
    $scope.logout = function(){
      
      AuthServices.logout().then(function(){
          $state.go('home',undefined,{reload:true})
      },function(){
      
      })
    }
    
    $scope.$watch(function(){
      return AuthServices.user},
                  function(){
      console.log('ToolbarController:$watch')
      
    })
    
	}]);
})(CrudMongoose);