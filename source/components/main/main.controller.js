/*
MainController
But : 
  Centralise les contrôles et les états lié au controller principal
Les actions:
  Bouton Principal Creation
  Masquer/Demasquer les onglets

*/
(function(app) {
	app.controller('MainController', ['$scope','$state',function($scope,$state) {
    $scope.tabCreateShow = false;
    $scope.currentNavItem ='list';
    
    $scope.mainEventCreate = function(){
      $scope.tabCreateShow = true;
      $scope.currentNavItem ='create';
      $state.go('create',undefined,{reload:true});
    }
    
    $scope.$watch('isCreate',function($scope){
      
    
    })
    
	}]);
})(CrudMongoose);