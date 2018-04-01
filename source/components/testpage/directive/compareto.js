(function(app) {
	
  
  app.directive('compareTo', function() {
   return {
      require:'ngModel',
      scope: {
            compareTo: "="
      },
      link: function(scope,elem,attrbs,ngModel){
          ngModel.$validators.compareTo = function(modelValue) {
              //console.log('ngModel.$validators.compareTo')
              return modelValue == scope.compareTo;
          };

          scope.$watch("compareTo", function() {
            //console.log('scope.$watch')  
            ngModel.$validate();
          });
        
          ngModel.$valid.compareTo = function(modelValue){
            console.log('scope.$valide')  
          }
      }
      
   } 
    
	});
  
})(CrudMongoose);