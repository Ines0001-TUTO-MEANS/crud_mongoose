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
    
    $scope.$on('EVENT_MAIN_CLOSE_CREATE',function(event){
      
      $scope.show_create = false;
      $scope.currentNavItem ='list';
      $state.go('list',undefined,{reload:true});
    })
    
    $scope.$on('EVENT_MAIN_SHOW_DETAIL',function(event){
      
      $scope.show_detail = true;
      $scope.currentNavItem ='detail';
      //$state.go('detail',undefined,{reload:true});
    })
    
    $scope.$on('EVENT_MAIN_CLOSE_DETAIL',function(event){
      
      $scope.show_detail = false;
      $scope.currentNavItem ='list';
      $state.go('list',undefined,{reload:true});
    })
    
	}]);
})(CrudMongoose);