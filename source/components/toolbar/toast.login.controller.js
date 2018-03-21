(function(app) {
	app.controller('LoginToastController', ['$scope', '$mdToast',function($scope,$mdToast) {
  $scope.toastVisible =false;
  $scope.dismissAction="";
                                                                         
  $scope.ShowLoginToast = function(){
    $scope.toastVisible =true;
    var toast ={
      controller : LoginToastController,
      templateUrl: 'toast.login.html',
      position: "top right",
      hideDelay: 1000;
      
    };
    
    $mdToast.show(toast).then(function(response){
      console.log('LoginToastController: timeout delay')
      $scope.toastVisible = false;
    })
    
  }
                                                                         
    
	}]);
})(CrudMongoose);