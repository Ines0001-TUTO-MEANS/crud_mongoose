(function(app) {
	app.controller('ForgotPasswordCtrl', ['$scope', '$http', function($scope,$http) {
    
    $scope.user = { userName:'ines@gmail.com',password:'ines'};
    
    $http({
      method: 'GET',
      url: '/api/tasks'
    }).then(function successCallback(response) {
        console.log('successCallback',response)
      }, function errorCallback(response) {
        console.log('errorCallback',response)
      });
    
	}]);
})(mApp);