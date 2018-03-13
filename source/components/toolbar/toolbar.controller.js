(function(app) {
	app.controller('ToolbarController', ['$scope','$state','RegisterService','$mdDialog', function($scope,$state,RegisterService,$mdDialog) {
    console.log('ToolbarController')
    
    $scope.logout = function(){
      var user_email = RegisterService.getUser();
      var confirm = $mdDialog.confirm()
          .title( user_email +', Do you really want to disconnect ?')
          .ariaLabel('Disconneting')
          .ok('Yes')
          .cancel('No');

      $mdDialog.show(confirm).then(function() {
          RegisterService.setLogout();
          $state.go('home',undefined,{reload:true})
          
        });
      
      
    }
    
	}]);
})(CrudMongoose);