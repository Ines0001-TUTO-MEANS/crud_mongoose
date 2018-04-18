(function(app) {
	app.controller('ForgotPasswordCtrl', ['$scope', '$http', function($scope,$http) {
    
    $scope.user = { userName:'ines@gmail.com',password:'ines'};
    
    $http({
      method: 'GET',
      url: '/someUrl'
    }).then(function successCallback(response) {
        // this callback will be called asynchronously
        // when the response is available
      }, function errorCallback(response) {
        // called asynchronously if an error occurs
        // or server returns response with an error status.
      });
    
	}]);
})(mApp);