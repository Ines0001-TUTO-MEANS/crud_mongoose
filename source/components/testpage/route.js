(function(app) {
    app.config(['$stateProvider', '$urlRouterProvider', 'Boom_service',function($stateProvider, $urlRouterProvider,Boom_service) {
      //Boom_service.name='emmanuel'
      $stateProvider.state('test', {
      url: '/test',
      
      views:{
        'content':{
            templateUrl: 'components/testpage/page.html',  
            controller: function($scope,Boom_service){
              //console.log('controller Boom: ',Boom_service.name)
              $scope.expanders=[{
                title: 'Titre article',
                message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur quis nisl pharetra, placerat sem sit amet, convallis justo. Pellentesque dictum.'
              },{
                title: 'Titre article',
                message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur quis nisl pharetra, placerat sem sit amet, convallis justo. Pellentesque dictum.'
              },{
              title: 'Titre article',
              message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur quis nisl pharetra, placerat sem sit amet, convallis justo. Pellentesque dictum.'
              }];
        }
      }
      // The controller waits for every one of the above items to be
      // completely resolved before instantiation. For example, the
      // controller will not instantiate until promiseObj's promise has 
      // been resolved. Then those objects are injected into the controller
      // and available for use.  
      
     }})
     
    }]);
  
    app.run(['$state',function($state){
        //$state.go('list',undefined,{reload:true})
    
    }]);
})(CrudMongoose);