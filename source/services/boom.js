(function(app) {
	app.service('BoomService', function(error) {
      function isBoom(){ return error.isBoom }
      
      return {
          get statusCode () {
              return isBoom()?error.output.statusCode:error;
          },
        
          get error () {
             return  isBoom()?error.output.payload.error:error
          },
        
          get message() {
              return isBoom()?error.output.message:error
          }
          
      }

	});
})(CrudMongoose);