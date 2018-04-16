(function(app) {
	app.controller('boomCtrl', ['$scope','BoomService',function($scope,BoomService) {
    var boom = {isBoom:true,output:{statusCode :'301'}};
    console.log('boomCtrl',BoomService.statusCode(boom))
        
	}]);
})(CrudMongoose);