(function(app) {
	app.controller('ToolbarController', ['$scope','RegisterService', function($scope,RegisterService) {
    console.log('ToolbarController')
    
    $scope.logout = function(){
      
      RegisterService.setLogout();
      
    }
    
	}]);
})(CrudMongoose);