(function(app) {
	app.controller('TaskDetailController', ['$scope', '$stateParams','TaskFactory','$mdDialog',function($scope,$stateParams,TaskFactory,$mdDialog) {
    $scope.task={};
    $scope.$parent.currentNavItem = 'tasks.detail';
    
    /*
    $http.get('/data/user.json').
        then(function(response){
          $scope.user = response.data ;
        },function(response){
          $scope.user = response.data || 'Request failed';
        });
    */
    TaskFactory.get({id:$stateParams.idTask},function(data){
      
      $scope.task = data; 
    },function(err){
        console.log('TaskDetailController:error:',err)
        $scope.task = err || 'Request failed';
    })
    
	}]);
})(CrudMongoose);