(function(app) {
    app.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {

      $stateProvider.state('test', {
      url: '/test',
      templateUrl: 'components/testpage/expander.page.html',  
      resolve:{


      },

      // The controller waits for every one of the above items to be
      // completely resolved before instantiation. For example, the
      // controller will not instantiate until promiseObj's promise has 
      // been resolved. Then those objects are injected into the controller
      // and available for use.  
      controller: function($scope){
        $scope.title = 'Titre article';
        $scope.message='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur quis nisl pharetra, placerat sem sit amet, convallis justo. Pellentesque dictum.'
      }
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