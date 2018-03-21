(function(app) {
	app.controller('LoginToastController', ['$scope', '$mdToast',function($scope,$mdToast {
  $scope.toastVisible =false;
  
  $scope.ShowLoginToast = function(){
    $scope.toastVisible =true;
    
  }
                                                                         
    
	}]);
})(CrudMongoose);