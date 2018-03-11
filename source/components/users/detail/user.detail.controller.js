(function(app) {
	app.controller('UserDetailController', ['$scope', '$stateParams','User_factory','$mdDialog',function($scope,$stateParams,User_factory,$mdDialog) {
    $scope.user={};
    
    /*
    $http.get('/data/user.json').
        then(function(response){
          $scope.user = response.data ;
        },function(response){
          $scope.user = response.data || 'Request failed';
        });
    */
    
    User_factory.get({id:$stateParams.idUser},function(data){
      
      $scope.user = data; 
    },function(err){
        console.log('UserDetailController:error:',err)
        $scope.user = err || 'Request failed';
    })
    
	}]);
})(CrudMongoose);