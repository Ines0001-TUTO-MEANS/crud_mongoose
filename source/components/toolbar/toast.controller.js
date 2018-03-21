(function(app) {
	app.controller('ToastController', ['$scope','AuthServices',function($scope,AuthServices) {
    $scope.authorized = undefined;
    
    
    $scope.$watch(function(){
                    return AuthServices.user },
                  function(newAuthorized,oldAuthorized){
      
      $scope.authorized =  !(typeof newAuthorized === 'undefined')
      
      console.log('ToastController:$watch:authorized:'+$scope.authorized )
    })
    
    
    
	}]);
})(CrudMongoose);