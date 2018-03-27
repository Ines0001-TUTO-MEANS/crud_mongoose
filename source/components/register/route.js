(function(app) {
    app.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {

        $stateProvider
          .state('auth',{
            url: '/auth',
            templateUrl: 'components/register/user.auth_.html'
            })
          .state('auth.register',{
            url: '/register',
            templateUrl: 'components/testpage/page.html',
            resolve: {
                    initName:function(){return 'Logout Form'}
            },
            controller: 'testpagecontroller'
            
            })
          .state('auth.login',{
            url: '/login',
            templateUrl: 'components/testpage/page.html',
            resolve: {
                    initName:function(){return 'Logout Form'}
            },
            controller: 'testpagecontroller'
              
          })
          .state('logout',{
            url: '/logout',  
            templateUrl: 'components/testpage/page.html',
            resolve: {
                    initName:function(){return 'Logout Form'}
            },
            controller: 'testpagecontroller'
            
          })

        //$urlRouterProvider.otherwise('/login')
    }]);
  
    app.run(['$state',function($state){
        //$state.go('register',undefined,{reload:true})
    
    }]);
})(CrudMongoose);