(function(app) {
	app.controller('LoginUserController', ['$scope', '$state','User_factory','$mdDialog',function($scope,$state,User_factory,$mdDialog) {
    $scope.user={};
    $scope.imagePath = '/img/icons/nodejs.png';
    
    $scope.login = function(form){
      console.log(user)
      var user_login = new User_factory(user)
      user_login.$authenticate(function(data){
            console.log('front:LoginUserController',data);
            

      },function(err){
          $state.go('error',{status:err.status},{reload:true})
          console.log(err)
      })
    
    }
    
	}]);
})(CrudMongoose);