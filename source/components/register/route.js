(function(app) {
    app.config(['$stateProvider', '$urlRouterProvider','$q', function($stateProvider, $urlRouterProvider,$q) {

        $stateProvider
          .state('register',{
            url: '/register',
            views:{
              'content':{
                  templateUrl: 'components/testPage/page.html',
                  controller: function($scope) {
                                $scope.message = {Page:'register'};
                              }
                }
              }})
          .state('login',{
            url: '/login',
            views:{
              'content': {
                  templateUrl: 'components/register/user.login.html',
                  controller: 'LoginUserController'
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