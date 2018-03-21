(function(app) {
	app.controller('ToastController', ['$scope','AuthServices',function($scope,AuthServices) {
    $scope.authorized = undefined;
    $scope.toastVisible = false;
    $scope.dismissAction = "";
    
    
    $scope.$watch(function(){
                    return AuthServices.user },
                  function(newAuthorized,oldAuthorized){
      
      $scope.authorized =  !(typeof newAuthorized === 'undefined')
      toastLogin();
      console.log('ToastController:$watch:authorized:'+$scope.authorized )
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
            $scope.toastVisible = false;
          })
      }
    
    }
    
	}]);
})(CrudMongoose);