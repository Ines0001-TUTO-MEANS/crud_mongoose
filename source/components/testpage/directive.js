(function(app) {
	app.directive('helloWorld', function() {
   return {
     restrict: 'AEC',
     replace: true,
     templateUrl :'components/test/hello.world.html'
   
   } 
    
	});
})(CrudMongoose);