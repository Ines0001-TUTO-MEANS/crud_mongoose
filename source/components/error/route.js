(function(app) {
    app.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {

        $stateProvider.state('error', {
            url: '/error/:status/:message',
            views:{
              'content':{
                templateUrl: 'components/error/page.html',
                controller: 'ErrorPageController'
              }
            }
        })
       
        
    }]);
  
    app.run(['$state',function($state){
        //$state.go('list',undefined,{reload:true})
    
    }]);
})(CrudMongoose);