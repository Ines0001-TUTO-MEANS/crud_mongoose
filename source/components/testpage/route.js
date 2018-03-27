(function(app) {
    app.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {

      $stateProvider.state('test', {
      url: '/test',
      templateUrl: 'components/testpage/page.html',  
      resolve:{

         // Example using function with simple return value.
         // Since it's not a promise, it resolves immediately.
         initName:  function(){
            return {value: 'Valeur de test..'};
         }

      },

      // The controller waits for every one of the above items to be
      // completely resolved before instantiation. For example, the
      // controller will not instantiate until promiseObj's promise has 
      // been resolved. Then those objects are injected into the controller
      // and available for use.  
      controller: 'testpagecontroller'
     })
      
      
      
      
      
      /*
        $stateProvider.state('test', {
            url: '/test',
            views:{
              'content':{
                templateUrl: 'components/testpage/page.html',
                
                controller: 'testpagecontroller',
                resolve: {
                    allo:  function(){
                              return {page: 'simple page'};
                           }
                }
              }
            }
        })
 */      
        
    }]);
  
    app.run(['$state',function($state){
        //$state.go('list',undefined,{reload:true})
    
    }]);
})(CrudMongoose);