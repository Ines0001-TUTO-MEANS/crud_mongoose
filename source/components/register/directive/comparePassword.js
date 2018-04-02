(function(app) {
	
  app.directive('comparePassword',[function() {
   return {
      require:'ngModel',
      scope: {
            comparePassword: "="
      },
      link: function(scope,elem,attrbs,ngModel){
          ngModel.$validators.notmatch = function(modelValue) {
              return modelValue == scope.comparePassword;
          };
          
          scope.$watch("comparePassword", function() {
            ngModel.$validate();
          });
        
      }
   } 
    
	}]);
  
})(CrudMongoose);