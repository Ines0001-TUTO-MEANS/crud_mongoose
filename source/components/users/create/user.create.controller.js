(function(app) {
	app.controller('UserCreateController', ['$scope', function($scope) {
    console.log('UserCreateController')
    $scope.closeCreateForm = function(){
      $scope.$emit('EVENT_MAIN_NOTIFICATION',{state:'list'})
    }
    
	}]);
})(CrudMongoose);