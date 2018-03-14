(function(app) {
	app.controller('ToolbarController', ['$scope','$state','AuthServices',function($scope,$state,AuthServices) {
    console.log('ToolbarController')
    
    $scope.authorized = false;
    
    $scope.logout = function(){
      AuthServices.logout().then(function(resolve){
          console.log('ToolbarController:',resolve)
          $state.go('login',undefined,{reload:true})
      },function(reject){
          console.log('ToolbarController:',reject)
      })
    }
    
    
    $scope.$watch(function(){
                    return AuthServices.user },
                  function(newAuthorized,oldAuthorized){
      
      $scope.authorized =  !(typeof newAuthorized === 'undefined')
      console.log('ToolbarController:$watch:authorized:'+$scope.authorized )
    })
    
	}]);
})(CrudMongoose);