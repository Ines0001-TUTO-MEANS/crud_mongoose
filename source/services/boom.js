(function(app) {
	app.service('BoomService', function(error) {
      function isBoom(){ return error.isBoom }
      
      this.statusCode = get(error){ 
          return isBoom()?error.output.statusCode:error;
      }
      this.error = get(error) {
          return  isBoom()?error.output.payload.error:error
      };
      this.message = get(error) {
              return isBoom()?error.output.message:error
      }
      

	});
})(CrudMongoose);