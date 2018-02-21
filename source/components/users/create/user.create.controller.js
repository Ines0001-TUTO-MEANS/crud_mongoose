(function(app) {
	app.controller('UserCreateController', ['$scope', '$stateParams','User_factory','$mdDialog',function($scope,$stateParams,User_factory,$mdDialog) {
  
    $scope.closeCreateForm = function(){
      console.log('UserCreateController::closeCreateForm')
      $scope.$emit('EVENT_MAIN_CLOSE_CREATE')
    }
    
	}]);
})(CrudMongoose);