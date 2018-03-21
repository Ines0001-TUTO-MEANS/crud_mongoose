(function(app) {
	app.controller('LoginToastController', ['$scope', 'AuthServices','$mdToast',function($scope,AuthServices,$mdToast) {
  $scope.toastVisible =false;
  $scope.dismissAction="";
  $scope.authorized = false;
                                                                         
  function ShowLoginToast(){
    $scope.toastVisible =true;
    var toast ={
      controller : LoginToastController,
      templateUrl: 'toast.login.html',
      position: "top right",
      hideDelay: 1000
      
    };
    
    $mdToast.show(toast).then(function(response){
      console.log('LoginToastController: timeout delay')
      $scope.toastVisible = false;
    })
    
  }
  
  $scope.$watch(function(){
                    return AuthServices.user },
                  function(newAuthorized,oldAuthorized){
      
      $scope.authorized =  !(typeof newAuthorized === 'undefined')
      console.log('LoginToastController:$watch:authorized:'+$scope.authorized )
      if($scope.authorized){
          ShowLoginToast()
      }
    })
                                                                         
    
	}]);
})(CrudMongoose);