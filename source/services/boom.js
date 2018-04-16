(function(app) {
	app.service('Boom_service', function(error) {
      this.
      return {
          get statusCode () {
              return error.output.statusCode;
          },
        
          get error () {
             return  error.output.payload.error
          },
        
          get message() {
              return error.output.message
          }
          
      }

	});
})(CrudMongoose);