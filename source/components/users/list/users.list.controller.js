(function(app) {
	app.controller('UsersListController', ['$scope','$rootScope','$state','User_factory','$mdDialog',function($scope,$rootScope,$state,User_factory,$mdDialog) {
    $scope.users={};
    
    /*   
    $http.get('/data/users.json').
      then(function(response) {
        console.log('currentNavItem:',$rootScope.currentNavItem);
        $scope.users = response.data;
      }, function(response) {
        $scope.users = response.data || 'Request failed';

    }) 
    */
    ListUser();
    
    $scope.detail = function(user){
      $scope.$emit('EVENT_MAIN_NOTIFICATION',{state:'detail',id:user._id})
      
      
    }
     
    $scope.delete = function(user){
      
      var confirm = $mdDialog.confirm()
          .title('Voulez-vous vraiment supprimer la fiche '+user.name+'?')
          .ariaLabel('Lucky day')
          .ok('Oui')
          .cancel('Non');

      $mdDialog.show(confirm).then(function() {
          EraseUser(user._id);
          
        });
      
    }
     /*
     $scope.$watchCollection('users',function(){
       console.log('watcher')
       })
     */
    function ListUser(){
      User_factory.query(function(data){
            $scope.users = data;

      },function(err){
          $scope.users = [];
          console.error('UsersListController:',err)
          $state.go('error',{status:err.status,message:err.data.message},{reload:true});
      })
    
    }
    
    function EraseUser(id){
     User_factory.delete({id:id},
                          function(data){
                             // success
                             ListUser();
                            //$state.reload();
                          },function(err){
                             // error
                             console.log(err);
      })
    }
   
    
   
    
     
    
	}]);
})(CrudMongoose);