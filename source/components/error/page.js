/*
ErrorPageController
But : 
  Centralise la vue de la page 404,403,505,...
Les actions:
  Retour à la Home page
  
*/
(function(app) {
	app.controller('ErrorPageController', ['$scope','$state','$stateParams',function($scope,$state,$stateParams) {
    $scope.status = $stateParams.status;
    $scope.message = $stateParams.message;
    
    
       
    
	}]);
})(CrudMongoose);