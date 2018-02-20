(function(app) {
	app.controller('UsersListController', ['$scope','$rootScope','$state','User_factory','$mdDialog',function($scope,$rootScope,$state,User_factory,$mdDialog) {
    var users=[];
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
    $scope.$apply()
    
    $scope.detail = function(user){
      
      $state.go('detail',{idUser:user._id});
      $rootScope.currentNavItem ='detail';
      
    }
     
    $scope.delete = function(user){
      
      var confirm = $mdDialog.confirm()
          .title('Voulez-vous vraiment supprimer la fiche '+user.name+'?')
          .ariaLabel('Lucky day')
          .ok('Oui')
          .cancel('Non');

      $mdDialog.show(confirm).then(function() {
          EraseUser(user._id);
          $state.go('list')
        });
      
    }
    
    $scope.$watch(function(){
      User_factory.query(function(data){
          $scope.users = data;

      },function(err){
          this.users = err || 'Request failed';
      })
    
    })
   
   var EraseUser = function(id){
     User_factory.delete({id:id},
                          function(data){
                             // success
                          },function(err){
                             // error
                             console.log(err);
      })
    }
   
    
   
    
     
    
	}]);
})(CrudMongoose);