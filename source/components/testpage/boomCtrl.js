(function(app) {
	app.controller('boomCtrl', ['$scope','Boom_service',function($scope,Boom_service) {
    var boom = Boom_service({output:{statusCode :'301'}});
    console.log('boomCtrl',boom.statusCode)
        
	}]);
})(CrudMongoose);