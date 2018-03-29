(function(app) {
	
  
  app.directive('compareTo', function() {
   return {
      require:'^ngModel',
      scope: {
            compareTo: "="
      },
      link: function(scope,elem,attrbs,ngModelCtrl){
          scope.$watch('compareTo',function(){
            console.log('vmPassword.confirm_password',ngModelCtrl.vmPassword.confirm_password)
          })    

      }
      
   } 
    
	});
  
})(CrudMongoose);