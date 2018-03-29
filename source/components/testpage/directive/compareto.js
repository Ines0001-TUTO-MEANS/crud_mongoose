(function(app) {
	
  
  app.directive('compareto', function() {
   return {
      require:'^ngModel',
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
  
})(CrudMongoose);