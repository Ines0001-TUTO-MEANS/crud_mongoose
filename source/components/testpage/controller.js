(function(app) {
	app.controller('testpagecontroller', ['$scope','simpleObj',function($scope,simpleObj) {
    $scope.message = name.page 
    $scope.info = 'Information mail controller'
    $scope.simple = simpleObj.value;
      
    $scope.showMessage = function(arg){
      console.log('testpagecontroller : showMessage with:'+ arg + 'parameter')
    }
    
    $scope.onClickInfo = function(){
      console.log('testpagecontroller : onClickInfo')
    }
        
	}]);
})(CrudMongoose);