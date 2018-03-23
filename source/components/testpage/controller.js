(function(app) {
	app.controller('testpagecontroller', ['$scope',function($scope) {
    $scope.message='I love AngularJS!'  
      
    $scope.showMessage = function(arg){
      console.log('Controller Message changed with:'+ arg)
    }
    
    $scope.onInfo = function(){
      console.log(''
    }
        
	}]);
})(CrudMongoose);