(function(app) {
    app.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {

        $stateProvider.state('logout', {
            url: '/logout/:valid',
            views:{
              'content':{
                templateUrl: 'components/home/page.html'
              },
              'content':{
                templateUrl: 'components/home/page.html'
              }
            }
        })
       
        $urlRouterProvider.otherwise('/') 
    }]);
  
    app.run(['$state',function($state){
        //$state.go('list',undefined,{reload:true})
    
    }]);
})(CrudMongoose);