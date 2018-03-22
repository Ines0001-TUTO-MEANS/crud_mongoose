(function(app) {
	app.directive('helloWorld', function() {
   return {
     restrict: 'AEC',
     replace: true,
     scope:{
       message: '=messageAttrb',
       showMessage: '&callbackShowMessage'
     },
     templateUrl :'components/test/hello.world.html',
     link: function(scope,elem,attrbs){
       scope.clearMessage= function(){
         scope.message = "";
         
       }
       
       scope.$watch('message',function(value){
         scope.showMessage({arg:value});
       
       });
       
       elem.bind('mouseover',function(){
         elem.css('cursor','pointer');
       
       })
     
     }
   
   } 
    
	});
})(CrudMongoose);