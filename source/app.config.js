var CrudMongoose = angular.module('CrudMongoose', ['ngMaterial', 'ngAnimate', 'ngMessages', 'ngAria', 'ui.router','ngResource']).
controller('CrudMongooseMainController',['$rootScope',function($rootScope){
  $rootScope.$on('$stateChangeSuccess', function(event, current) {
         console.log('current:',current)
       });
    
}])

