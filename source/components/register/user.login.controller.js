(function(app) {
	app.controller('LoginUserController', ['$scope', '$stateParams','User_factory','$mdDialog',function($scope,$stateParams,User_factory,$mdDialog) {
    $scope.user={};
    $scope.imagePath = '/img/icons/nodejs.png';
    
    $scope.login = function(user){
      console.log(user)
      var user_login = new User_factory(user)
      user_login.$authenticate(function(data){
            console.log(data);

      },function(err){
          console.log(err)
      })
    
    }
    
	}]);
})(CrudMongoose);