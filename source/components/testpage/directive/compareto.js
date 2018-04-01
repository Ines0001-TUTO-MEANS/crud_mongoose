(function(app) {
	
  
  app.directive("phoneValidator", function () {
      return {
          require : 'ngModel',
          restrict: 'A',
          link: function (scope, element, attrs, ngModel) {
              ngModel.$validators.phone = function(value) {
                  return !value || /0[\d]{9}/.test(value);
              };
          }
      };
  });
  
  app.directive('compareTo', function() {
   return {
      require:'ngModel',
      scope: {
            compareTo: "="
      },
      link: function(scope,elem,attrbs,ngModel){
          ngModel.$validators.compareTo = function(modelValue,viewValue) {
              console.log('ngModel.$validators.confirm_password:',modelValue,viewValue)
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