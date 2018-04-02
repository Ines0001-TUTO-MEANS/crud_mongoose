(function(app) {
	
  app.directive('compareTo',['$q','$timeout',function($q,$timeout) {
   return {
      require:'ngModel',
      scope: {
            compareTo: "="
      },
      link: function(scope,elem,attrbs,ngModel){
          
          
          ngModel.$validators.notmatch = function(modelValue) {
            console.log('validators')  
            return modelValue == scope.compareTo;
          };
          
          /*
          ngModel.$asyncValidators.notmatch = function(modelvalue){
            var def = $q.defer();
     
            $timeout(function() {
                if (modelvalue === scope.compareTo) {
                    
                    def.resolve();
                } else {
                    def.reject();
                }
            }, 1000);

            return def.promise;
            
          };
          */

          scope.$watch("compareTo", function() {
            console.log('$watch')  
            ngModel.$validate();
          });
        
        
      }
      
   } 
    
	}]);
  
})(CrudMongoose);