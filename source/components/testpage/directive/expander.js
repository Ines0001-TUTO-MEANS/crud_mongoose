(function(app) {
	
  
  app.directive('accordion', function() {
   return {
      restrict: 'E',
      replace: true,
      transclude: true,
      template :'<div ng-transclude></div>',
      controller: function($scope){
          var expanders = [];
        
          this.addExpander = function(expander){
            expanders.push(expander);
          }
          
          this.collapseAll = function(expander){
            expanders.forEach(function(item){
              if(item!=expander) expander.ngtoggle = false
            })
          }
      
      
      }
      
   } 
    
	});
  
  
  app.directive('expander', function() {
   return {
      restrict: 'E',
      replace: true,
      require: '^accordion',
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