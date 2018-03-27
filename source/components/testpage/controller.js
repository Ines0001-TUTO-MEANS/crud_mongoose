(function(app) {
	app.controller('testpagecontroller', ['$scope','initName',function($scope,initName) {
    $scope.message = name.page 
    $scope.info = 'Information mail controller'
    $scope.simple = initName.value || 'test';
      
    $scope.showMessage = function(arg){
      console.log('testpagecontroller : showMessage with:'+ arg + 'parameter')
    }
    
    $scope.onClickInfo = function(){
      console.log('testpagecontroller : onClickInfo')
    }
        
	}]);
})(CrudMongoose);