(function(app) {
	app.service('BoomService', function(error) {
      function isBoom(){ return error.isBoom }
      this.error = error;
      this.statusCode = function(){ 
          return isBoom()?error.output.statusCode:error;
      }
      this.error = function() {
          return  isBoom()?error.output.payload.error:error
      };
      this.message = function() {
              return isBoom()?error.output.message:error
      }
      

	});
})(CrudMongoose);