(function(app) {
    app.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {

        $stateProvider.state('test', {
            url: '/test',
            views:{
              'content':{
                templateUrl: 'components/testpage/page.html'
              }
            }
        })
       
        
    }]);
  
    app.run(['$state',function($state){
        //$state.go('list',undefined,{reload:true})
    
    }]);
})(CrudMongoose);