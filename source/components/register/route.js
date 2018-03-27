(function(app) {
    app.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {

        $stateProvider
          .state('auth',{
            url: '/auth',
            views:{
                    'content':{
                        templateUrl: 'components/register/user.auth.html',
                        controller:'AuthController'
                    }
            }
           
          })
          .state('auth.register',{
            url: '/register',
            templateUrl: 'components/register/auth.register.html',
            controller: function($scope){
              $scope.$parent.currentNavItem = 'register'
            }
            
          })
          .state('auth.login',{
            url: '/login',
            templateUrl: 'components/register/auth.login.html',
            controller: function($scope){
              $scope.$parent.currentNavItem = 'login'
            }
              
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