(function(app) {
	app.controller('LoginUserController', ['$rootScope','$scope', '$cookies','$state','User_factory','RegisterService','$mdDialog',function($rootScope,$scope,$cookies,$state,User_factory,RegisterService,$mdDialog) {
    $scope.user={};
    $scope.errorMessage = '';
    $scope.imagePath = '/img/icons/nodejs.png';
    
    $scope.login = function(form){
      
      var user_login = new User_factory($scope.user)
      
      user_login.$authenticate(function(data){
        if(data.success){      
          /* Add token in cookies client
            Use by config.headers['x-access-token'] in request $http
            instanciate to app.config.js
          */
          $cookies.put('token',data.token)
          // use $rootScope.CrudMongoose object to save login state
          
          RegisterService.setLogin( $scope.user )
          $state.go('users.list',undefined,{reload:true})
          
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