(function(app) {
	app.controller('LoginUserController', ['$q','$scope', '$cookies','$state','AuthServices',function($q,$scope,$cookies,$state,AuthServices) {
    $scope.user={};
    $scope.errorMessage = '';
    $scope.imagePath = '/img/icons/nodejs.png';
    
    var auth = {};
    
    $scope.login = function(form){
      
      // Call authenticate service
      AuthServices.login($scope.user).then(function(data){
          
          // Switch consult users.list link
          $state.go('users.list',undefined,{reload:true})
      
      },function(err){
          form.password.$error.wrongpassword = true;
          $scope.errorMessage = err;
          form.$invalid = true;
          $scope.user.password = '';
      })
      
    }
    
	}]);
})(CrudMongoose);