(function(app) {
	app.controller('LoginUserController', ['$q','$scope', '$state','AuthServices',function($q,$scope,$state,AuthServices,LoginToastController) {
    $scope.user={};
    $scope.errorMessage = '';
    $scope.showSpinner = false;
    $scope.imagePath = '/img/icons/nodejs.png';
    
    $scope.login = function(form){
      $scope.showSpinner = true;
      form.$invalid = true;
      // Call authenticate service
      AuthServices.login($scope.user).then(function(data){
          // Switch consult users.list link
          $state.go('users.list',undefined,{reload:true})
          $scope.showSpinner = false;
          
      
      },function(err){
          form.password.$error.wrongpassword = true;
          $scope.errorMessage = err;
          form.$invalid = true;
          $scope.user.password = '';
          $scope.showSpinner = false;
      })
      
    }
    
	}]);
})(CrudMongoose);