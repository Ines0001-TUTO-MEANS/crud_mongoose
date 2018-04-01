(function(app) {
	
  app.directive('comparePassword',[function() {
   return {
      require:'ngModel',
      scope: {
            compareTo: "="
      },
      link: function(scope,elem,attrbs,ngModel){
          ngModel.$validators.notmatch = function(modelValue) {
              return modelValue == scope.compareTo;
          };
          
          scope.$watch("compareTo", function() {
            ngModel.$validate();
          });
        
      }
   } 
    
	}]);
  
})(CrudMongoose);