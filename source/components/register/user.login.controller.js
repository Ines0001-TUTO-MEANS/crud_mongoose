(function(app) {
	app.controller('LoginUserController', ['$q','$scope', '$cookies','$state','AuthServices','User_factory','$mdDialog',function($q,$scope,$cookies,$state,AuthServices,User_factory,$mdDialog) {
    $scope.user={};
    $scope.errorMessage = '';
    $scope.imagePath = '/img/icons/nodejs.png';
    
    var auth = {};
    
    $scope.login = function(form){
      AuthServices.login($scope.user).then(function(data){
        console.log('ok:',data)
      },function(err){
        console.log('err:',err)
      })
      
      
      
      /*
      var user_login = new User_factory($scope.user)
      
      user_login.$authenticate(function(data){
        if(data.success){      
          
          // use RegisterService to centralize login state
          AuthService.setAuthorized( $scope.user,data.token)
          
          // Switch consult users.list link
          $state.go('users.list',undefined,{reload:true})
          
        }else{
          form.password.$error.wrongpassword = true;
          $scope.errorMessage = data.message;
          form.$invalid = true;
          $scope.user.password = '';
        } 

      },function(err){
          $state.go('error',{status:err.status},{reload:true})
          console.log(err)
      })
      */
    
    }
    
	}]);
})(CrudMongoose);