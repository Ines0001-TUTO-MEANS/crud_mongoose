(function(app) {
    app.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {

        $stateProvider
          .state('auth',{
            url: '/auth',
            views:{
              'content':{
                  templateUrl: 'components/register/user.auth.html'
                }
              }})
          .state('auth.register',{
            url: '/register',
            views:{
              'content':{
                  templateUrl: 'components/testpage/page.html',
                  controller: 'testpagecontroller'
                }
              }})
          .state('auth.login',{
            url: '/login',
            views:{
              'content': {
                  templateUrl: 'components/testpage/page.html',
                  controller: 'testpagecontroller',
                  resolve: {
                    
                  }
                }
            }})
          .state('logout',{
            url: '/logout',  
            views:{
              'content': {
                  templateUrl: 'components/testPage/page.html',
                  controller: function($scope) {
                                $scope.message = {Page:'logout'};
                              }
                  
                }
            }})

        //$urlRouterProvider.otherwise('/login')
    }]);
  
    app.run(['$state',function($state){
        //$state.go('register',undefined,{reload:true})
    
    }]);
})(CrudMongoose);