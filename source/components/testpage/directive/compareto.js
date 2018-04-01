(function(app) {
	
  app.directive('compareTo',['$q','$timeout',function($q,$timeout) {
   return {
      require:'ngModel',
      scope: {
            compareTo: "="
      },
      link: function(scope,elem,attrbs,ngModel){
          
          /*
          ngModel.$validators.notmatch = function(modelValue) {
              return modelValue == scope.compareTo;
          };
          */
        
          ngModel.$asyncValidators.nomatch = function(modelvalue){
            var def = $q.defer();
     
            $timeout(function() {
                if (modelValue === scope.compareTo) {
                    
                    def.resolve();
                } else {
                    def.reject();
                }
            }, 1000);

            return def.promise;
            
          };

          scope.$watch("compareTo", function() {
            ngModel.$validate();
          });
        
        
      }
      
   } 
    
	}]);
  
})(CrudMongoose);