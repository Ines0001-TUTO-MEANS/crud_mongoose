(function(app) {
	app.controller('ToolbarController', ['$scope','$state','AuthServices',function($scope,$state,AuthServices) {
    console.log('ToolbarController')
    
    $scope.authorized = false;
    
    $scope.logout = function(){
      
      AuthServices.logout().then(function(){
          $state.go('home',undefined,{reload:true})
      },function(){
      
      })
    }
    
    /*
    $scope.$watch(function(){
      return AuthServices.user },
                  function(newAuthorized,oldAuthorized){
      console.log('ToolbarController:$watch')
      $scope.authorized = newAuthorized
    })
    */
    
	}]);
})(CrudMongoose);