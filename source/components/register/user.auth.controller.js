(function(app) {
	app.controller('AuthController', ['$q','$scope', '$state','AuthServices','User_factory',function($q,$scope,$state,AuthServices,User_factory) {
    $scope.user={};
    $scope.errorMessage = '';
    $scope.showSpinner = false;
    $scope.imagePath = '/img/icons/nodejs.png';
    $scope.currentNavItem = 'login'
    
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
    
    $scope.register = function(form){
      $scope.showSpinner = true;
      form.$invalid = true;
      // Call create new user
      User_factory.save(form.user,function(data){
             // success
             // Call authenticate service
            AuthServices.login($scope.user).then(function(data){
                // Switch consult users.list link
                $state.go('users.list',undefined,{reload:true})
                $scope.showSpinner = false;


            },function(err){

                $scope.user= {};
                $scope.showSpinner = false;
            })
          
          },function(err){
             // error
             console.log(err);
      })
      
    }
    
	}]);
})(CrudMongoose);