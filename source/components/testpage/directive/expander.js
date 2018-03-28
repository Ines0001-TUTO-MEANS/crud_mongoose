(function(app) {
	app.directive('expander', function() {
   return {
      restrict: 'E',
      replace: true,

      scope:{
       title: '@'

      },

      link: function(scope,elem,attrbs){
       scope.ngtoggle = false;
       var oldTitle ='';

       scope.toggle= function(){

         scope.ngtoggle = !scope.ngtoggle
         if(scope.ngtoggle){ 
           oldTitle = scope.title
           scope.title= scope.title+' -ouvert-'
         }else{
           if(oldTitle) scope.title = oldTitle
         }

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