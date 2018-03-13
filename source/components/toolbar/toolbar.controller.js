(function(app) {
	app.controller('ToolbarController', ['$scope','$state','AuthService','$mdDialog', function($scope,$state,AuthService,$mdDialog) {
    console.log('ToolbarController')
    
    $scope.logout = function(){
      var user_email = AuthService.getUser();
      var confirm = $mdDialog.confirm()
          .title( user_email +', Do you really want to disconnect ?')
          .ariaLabel('Disconneting')
          .ok('Yes')
          .cancel('No');

      $mdDialog.show(confirm).then(function() {
          AuthService.setUnauthorized();
          $state.go('home',undefined,{reload:true})
          
        });
      
      
    }
    
	}]);
})(CrudMongoose);