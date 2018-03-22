(function(app) {
	app.controller('testpagecontroller', ['$scope',function($scope) {
    $scope.message='I love AngularJS!'  
      
    $scope.showMessage = function(arg){
      console.log('Message changed with:'+ arg)
    }
        
	}]);
})(CrudMongoose);