/*

var boom = new BoomService({isBoom:true,output:{statusCode :'301',payload:{message:'mon message error'}}});
console.log('boomCtrl',boom.statusCode())
console.log('boomCtrl',boom.message())

*/

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
      this.message = function() {
              return error.isBoom ?error.output.payload.message:error
      }
    }

    return constructor;
    
	});
})(CrudMongoose);