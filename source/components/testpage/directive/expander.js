(function(app) {
	app.directive('helloWorld', function() {
   return {
     restrict: 'AEC',
     replace: true,
     
     scope:{
       message: '@messageAttrb',
       callback: '&onClickConsole'
     },
     
     link: function(scope,elem,attrbs){
       scope.clearMessage= function(){
         
         scope.callback({arg:scope.message});
         scope.message = "";
         
       }
       
       elem.bind('mouseover',function(){
         elem.css('cursor','pointer');
       
       })
     
     },
   
     templateUrl :'components/testpage/hello.world.html',
    transclude:true
   
   } 
    
	});
})(CrudMongoose);