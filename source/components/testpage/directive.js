(function(app) {
	app.directive('helloWorld', function() {
   return {
     restric: 'AEC',
     replace: true,
     template :'Hello World'
   
   } 
    
	});
})(CrudMongoose);