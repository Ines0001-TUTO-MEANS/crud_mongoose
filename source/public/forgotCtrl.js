(function(app) {
	app.controller('ForgotPasswordCtrl', ['$scope', '$http','$location', function($scope,$http,$location) {
    
    //$scope.user = { userName:'ines@gmail.com',password:'ines'};
    
    $scope.user = $location.search();
    console.log('$location:',$location.search())
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