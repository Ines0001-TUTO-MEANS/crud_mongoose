(function(app) {
	app.controller('testpagecontroller', ['$scope',function($scope) {
    $scope.message = name.page 
    $scope.info = 'Information mail controller'
      
    $scope.showMessage = function(arg){
      console.log('testpagecontroller : showMessage with:'+ arg + 'parameter')
    }
    
    $scope.onClickInfo = function(){
      console.log('testpagecontroller : onClickInfo')
    }
        
	}]);
})(CrudMongoose);