(function(app) {
	app.controller('boomCtrl', ['$scope','Boom_service',function($scope,Boom_service) {
    Boom_service.name='emmanuel';
    console.log('boomCtrl',Boom_service.name)
        
	}]);
})(CrudMongoose);