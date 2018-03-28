(function(app) {
	app.controller('UserCreateController', ['$scope','User_factory', function($scope,User_factory) {
    
    $scope.user = {};
    $scope.$parent.currentNavItem = 'users.create';
    
    $scope.saveCreateForm = function(user){
      User_factory.save(user,function(data){
                             // success
                             $scope.$emit('EVENT_MAIN_NOTIFICATION',{state:'users.list'})
                            //$state.reload();
                            },function(err){
                               // error
                               console.log(err);
                        })
      
      
    }
    
	}]);
})(CrudMongoose);