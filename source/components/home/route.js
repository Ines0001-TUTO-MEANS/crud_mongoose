(function(app) {
    app.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {

        $stateProvider.state('home', {
            url: '/',
            views:{
              'content':{
                templateUrl: 'components/home/page.html'
              },
              'toolbar':{
                  templateUrl: 'components/toolbar/login.html'
              }
            }
        })
       
        $urlRouterProvider.otherwise('/') 
    }]);
  
    app.run(['$state',function($state){
        //$state.go('list',undefined,{reload:true})
    
    }]);
})(CrudMongoose);