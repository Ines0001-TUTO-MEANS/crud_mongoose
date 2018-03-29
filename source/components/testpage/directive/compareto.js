(function(app) {
	
  
  app.directive('compareTo', function() {
   return {
      require:'^ngModel',
      scope: {
            compareTo: "="
      },
      link: function(scope,elem,attrbs,ngModelCtrl){
          scope.$watch('ngModelCtrl.confirm_password',function(){
            console.log('confirm_password')
          })    

      }
      
   } 
    
	});
  
})(CrudMongoose);