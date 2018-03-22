(function(app) {
	app.directive('helloWorld', function() {
   return {
     restrict: 'AEC',
     replace: true,
     template :'Hello World'
   
   } 
    
	});
})(CrudMongoose);