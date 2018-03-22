(function(app) {
	app.directive('helloWorld', function() {
   return {
     restrict: 'AEC',
     replace: true,
     templateUrl :'components/error/page.html'
   
   } 
    
	});
})(CrudMongoose);