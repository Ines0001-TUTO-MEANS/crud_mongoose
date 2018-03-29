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
              if(item!=expander) item.ngtoggle = false
            })
          }
      
      
      }
      
   } 
    
	});
  
  
  app.directive('expander', function() {
   return {
      restrict: 'E',
      replace: true,
      transclude:true,
      require: '^accordion',
      scope:{
       title: '@'

      },

      link: function(scope,elem,attrbs,accordionController){
       scope.ngtoggle = false;
       
       
       accordionController.addExpander(scope)
        
        
       scope.toggle= function(){
         
         scope.ngtoggle = !scope.ngtoggle
         accordionController.collapseAll(scope)
         

       }

       elem.bind('mouseover',function(){
         elem.css('cursor','pointer');

       })

      },

      templateUrl :'components/testpage/directive/expander.html'
      
   
   } 
    
	});
  
  
  
})(CrudMongoose);