(function(app) {
	app.controller('UserCreateController', ['$scope', function($scope) {
    console.log('UserCreateController')
    $scope.closeCreateForm = function(){
      console.log('UserCreateController::closeCreateForm')
      $scope.$emit('EVENT_MAIN_CLOSE_CREATE')
    }
    
	}]);
})(CrudMongoose);