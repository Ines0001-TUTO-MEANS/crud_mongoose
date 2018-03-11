(function(app) {
	app.controller('LoginUserController', ['$scope', '$state','User_factory','$mdDialog',function($scope,$state,User_factory,$mdDialog) {
    $scope.user={};
    $scope.errorMessage = '';
    $scope.imagePath = '/img/icons/nodejs.png';
    
    $scope.login = function(form){
      
      var user_login = new User_factory($scope.user)
      
      user_login.$authenticate(function(data){
        if(data.success){      
             
        }
        form.password.$error.wrongpassword = true;
        $scope.errorMessage = data.message;
        form.$invalid = true;
        $scope.user.password = '';
           

      },function(err){
          $state.go('error',{status:err.status},{reload:true})
          console.log(err)
      })
    
    }
    
	}]);
})(CrudMongoose);