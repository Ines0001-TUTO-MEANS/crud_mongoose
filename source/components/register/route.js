(function(app) {
    app.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {

        $stateProvider
          .state('register',{
            url: '/register',
            views:{
              'content':{
                  templateUrl: 'components/testPage/page.html',
                  controller: function($scope) {
                                $scope.message = {Page:'register'};
                              }
                },
              'toolbar':{
                  templateUrl: 'components/toolbar/login.html'
              }
              }})
          .state('login',{
            url: '/login',  
            views:{
              'content': {
                  templateUrl: 'components/register/user.login.html',
                  controller: 'LoginUserController'
                },
              'toolbar':{
                  templateUrl: 'components/toolbar/logout.html'
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
                  
                },
              'toolbar':{
                  templateUrl: 'components/toolbar/login.html'
              }
            }})

        //$urlRouterProvider.otherwise('/login')
    }]);
  
    app.run(['$state',function($state){
        //$state.go('register',undefined,{reload:true})
    
    }]);
})(CrudMongoose);