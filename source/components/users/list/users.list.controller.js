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
    User_factory.query(function(data){
        this.users = data;
        $scope.$digest();
    },function(err){
        this.users = err || 'Request failed';
    })
    
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
          User_factory.delete({id:user._id},function(data){
            var pos = this.users.find(function(elem){
              elem._id===user._id})
            this.users.splice(pos,1)
            $scope.$digest(); 
          },function(err){
              this.users = err || 'Request failed';
          },function(err){
              console.log(err)
          })
        });
      
    }
   
   var EraseUser = function(id){
     User_factory.delete({id:user._id})
    }
   $scope.$watch(function(){
      $scope.users=this.users;
    });
    
     
    
	}]);
})(CrudMongoose);