(function(app) {
	app.directive('expander', function() {
   return {
      restrict: 'E',
      replace: true,

      scope:{
       title: '='

      },

      link: function(scope,elem,attrbs){
       scope.toggle = false;

       scope.toggle= function(){

         scope.toggle = !scope.toggle

       }

       elem.bind('mouseover',function(){
         elem.css('cursor','pointer');

       })

      },

      templateUrl :'components/testpage/directive/expander.html',
      transclude:true
   
   } 
    
	});
})(CrudMongoose);