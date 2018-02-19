(function(app) {
	app.controller('UsersListController', ['$scope','$rootScope','$state','User_factory','$mdDialog',function($scope,$rootScope,$state,User_factory,$mdDialog) {
    $scope.users=[];
    $rootScope.currentNavItem ='list';
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
      
      $state.go('detail',{idUser:user._id});
      $rootScope.currentNavItem ='detail';
      
    }
     
    $scope.delete = function(user){
      
      var confirm = $mdDialog.confirm()
          .title('Voulez-vous vraiment supprimer la fiche '+user.name+'?')
          .ariaLabel('Lucky day')
          .targetEvent(ev)
          .ok('Oui')
          .cancel('N');

    $mdDialog.show(confirm).then(function() {
      $scope.status = 'You decided to get rid of your debt.';
    }, function() {
      $scope.status = 'You decided to keep your debt.';
    });
      
      User_factory.delete({id:user._id},function(data){
        
        $scope.users = data;  
      },function(err){
          $scope.users = err || 'Request failed';
      })
    }
    
     
    
	}]);
})(CrudMongoose);