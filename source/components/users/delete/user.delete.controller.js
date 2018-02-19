(function(app) {
	app.controller('UserDeleteController', ['$scope', '$stateParams','User_factory',function($scope,$stateParams,User_factory) {
    $scope.user={};
    
    
    User_factory.delete({id:$stateParams.idUser},function(data){
      
      $scope.users = data;  
    },function(err){
        $scope.users = err || 'Request failed';
    })
    
	}]);
})(CrudMongoose);