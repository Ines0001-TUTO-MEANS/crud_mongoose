(function(app) {
	app.controller('ToolbarController', ['$scope','$state','AuthServices','$mdToast',function($scope,$state,AuthServices,$mdToast) {
    $scope.authorized = false;
    $scope.toastVisible =false;
    $scope.dismissAction="";
    
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
      if($scope.authorized){
          ShowLoginToast()
      }
      console.log('ToolbarController:$watch:authorized:'+$scope.authorized )
    })
    
    $scope.ShowLoginToast = function(){
      $scope.toastVisible =true;
      var toast ={
            controller : ToastController,
            templateUrl: 'toast.login.html',
            position: "top right",
            hideDelay: 1000
          };

      $mdToast.show(toast).then(function(response){
        console.log('LoginToastController: timeout delay')
        $scope.toastVisible = false;
      })
    
    }
    
	}]);
})(CrudMongoose);