ErrorPageController
But : 
  Centralise la vue de la page 404,403,505,...
Les actions:
  Retour à la Home page
  

*/
(function(app) {
	app.controller('ErrorPageController', ['$scope','$state',function($scope,$state) {
    $scope.error = false;
    $scope.currentNavItem ='list';
    
    $scope.mainEventCreate = function(){
      $scope.show_state= 'create';
      $scope.currentNavItem ='create';
      $state.go('create',undefined,{reload:true});
    }
    
    
	}]);
})(CrudMongoose);