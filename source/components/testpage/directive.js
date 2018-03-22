(function(app) {
	app.directive('helloWorld', function() {
   return {
     restrict: 'AEC',
     replace: true,
     transclude:true,
     scope:{
       message: '=messageAttrb',
       callback: '&onClickConsole'
     },
     templateUrl :'components/test/hello.world.html',
     link: function(scope,elem,attrbs){
       scope.clearMessage= function(){
         
         scope.callback({arg:scope.message});
         scope.message = "";
         
       }
       
       elem.bind('mouseover',function(){
         elem.css('cursor','pointer');
       
       })
     
     }
   
   } 
    
	});
})(CrudMongoose);