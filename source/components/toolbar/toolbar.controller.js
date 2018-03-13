(function(app) {
	app.controller('ToolbarController', ['$rootScope','$scope', function($rootScope,$scope) {
    console.log('ToolbarController')
    
    $scope.logout = function(){
      console.log('ToolbarController: logout')
      $rootScope.CrudMongooseGlobal.connecting = false
      $rootScope.CrudMongooseGlobal.user = {}
    }
    
	}]);
})(CrudMongoose);