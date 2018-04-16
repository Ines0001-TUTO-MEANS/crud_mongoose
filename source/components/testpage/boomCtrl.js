(function(app) {
	app.controller('boomCtrl', ['$scope','BoomService',function($scope,BoomService) {
    var boom = new BoomService({output:{statusCode :'301'}});
    console.log('boomCtrl',boom.statusCode)
        
	}]);
})(CrudMongoose);