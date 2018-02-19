(function(app) {
	app.controller('UsersListController', ['$scope','$rootScope','$state','User_factory',function($scope,$rootScope,$state,User_factory) {
    $scope.users=[];
    /*   
    $http.get('/data/users.json').
      then(function(response) {
        console.log('currentNavItem:',$rootScope.currentNavItem);
        $scope.users = response.data;
      }, function(response) {
        $scope.users = response.data || 'Request failed';

    }) 
    */
    User_factory.query(function(data){
        $scope.users = data; 
    },function(err){
        $scope.users = err || 'Request failed';
    })
    
    $scope.detail = function(user){
      
      console.log('id:',user._id);
      $state.go('detail',{idUser:user._id});
      $rootScope.currentNavItem ='detail';
      
    }
     
    $scope.delete = function(user){
      
      User_factory.delete({id:user._id},function(data){
        
        $scope.users = data;  
      },function(err){
          $scope.users = err || 'Request failed';
      })
    }
    
     
    
	}]);
})(CrudMongoose);