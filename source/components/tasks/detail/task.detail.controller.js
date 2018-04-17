(function(app) {
	app.controller('TaskDetailController', ['$scope', '$state','$stateParams','TaskFactory','BoomService','$mdDialog',function($scope,$state,$stateParams,TaskFactory,BoomService,$mdDialog) {
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
        var boom = new BoomService(err.data)
        $state.go('error',{status:boom.statusCode(),message:boom.message()},{reload:true});
        //$scope.task = err || 'Request failed';
    })
    
	}]);
})(CrudMongoose);