(function(app) {
	app.controller('ToolbarController', ['$scope','$state','AuthServices','$mdToast',function($scope,$state,AuthServices,$mdToast) {
    $scope.authorized = false;
    
    $scope.logout = function(){
      AuthServices.logout().then(function(resolve){
          console.log('ToolbarController:',resolve)
          $state.go('auth.login',undefined,{reload:true})
      },function(reject){
          console.log('ToolbarController:',reject)
      })
    }
    
    
    $scope.$watch(function(){
                    return AuthServices.user },
                  function(newAuthorized,oldAuthorized){
      
      $scope.authorized =  !(typeof newAuthorized === 'undefined')
      toastLogin();
      
      console.log('ToolbarController:$watch:authorized:'+$scope.authorized )
    })
    
    
    function toastLogin(){
    
      if($scope.authorized){
          $scope.toastVisible =true;
          var toast ={
                controller : 'ToastController',
                templateUrl: 'components/toolbar/toast.login.html',
                position: "top right",
                hideDelay: 5000
              };

          $mdToast.show(toast).then(function(response){
            console.log('LoginToastController: timeout delay')
            
          })
      }
    
    }
   
    
	}]);
})(CrudMongoose);