(function(app) {
	
  
  app.directive('compareTo', function() {
   return {
      require:'ngModel',
      scope: {
            compareTo: "="
      },
      link: function(scope,elem,attrbs,ngModel){
          ngModel.$validators.compareTo = function(modelValue,viewValue) {
              console.log('ngModel.$validators.compareTo:',modelValue,viewValue)
              return modelValue == scope.compareTo;
          };

          scope.$watch("compareTo", function() {
            //console.log('scope.$watch')  
            ngModel.$validate();
          });
        
        
      }
      
   } 
    
	});
  
})(CrudMongoose);