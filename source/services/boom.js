(function(app) {
	app.factory('BoomService', function() {
    function constructor(error){
      //this.error = error

      this.statusCode = function(){ 
          return error.isBoom ?error.output.statusCode:error;
      }
      this.error = function() {
          return  error.isBoom ?error.output.payload.error:error
      };
      this.message = function(error) {
              return error.isBoom ?error.output.message:error
      }
    }

    return constructor;
    
	});
})(CrudMongoose);