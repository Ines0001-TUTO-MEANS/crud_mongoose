var CrudMongoose = angular.module('CrudMongoose', ['ngMaterial', 'ngAnimate', 'ngMessages', 'ngAria', 'ui.router','ngResource']);

(function(app) {
	app.controller('TabsCtrl',['$scope','$location',function($scope,$location){
    $scope.selectedIndex = 0;

    $scope.$watch('selectedIndex', function(current, old) {
        switch (current) {
            case 0:
                $location.url("/view1");
                break;
            case 1:
                $location.url("/view2");
                break;
            
        }
    
	}]);
})(CrudMongoose);