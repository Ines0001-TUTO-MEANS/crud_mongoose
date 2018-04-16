(function(app) {
	app.service('BoomService', function() {
      this.error ={}
      
      this.BoomService = function(error){
         this.error = error; 
      }
    
      this.statusCode = function(error){ 
          return error.isBoom ?error.output.statusCode:error;
      }
      this.error = function(error) {
          return  error.isBoom ?error.output.payload.error:error
      };
      this.message = function(error) {
              return error.isBoom ?error.output.message:error
      }
      

	});
})(CrudMongoose);