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
    $scope.currentNavItem ='tasks.list';
    
    
    $scope.mainEventCreate = function(){
      $scope.show_state= 'tasks.create';
      $scope.currentNavItem ='tasks.create';
      $state.go('tasks.create',undefined,{reload:true});
    }
    
    
    
    $scope.$on('EVENT_MAIN_NOTIFICATION',function(event,data){
      console.log('MainController:EVENT_MAIN_NOTIFICATION',data)
      $scope.show_state = data.state;
      $scope.currentNavItem =data.state;
      $state.go(data.state,{idTask:data.id},{reload:true});
      
    })
    
  
    
	}]);
})(CrudMongoose);