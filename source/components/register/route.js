(function(app) {
    app.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {

        $stateProvider
          .state('register', {
            url: '/register',
            templateUrl: 'components/testPage/page.html',
            controller: function($scope) {
                $scope.message = {Page:'register'};
            }
              
          })
          .state('login', {
            url: '/login',
            templateUrl: 'components/register/user.login.html',
            controller: 'LoginUserController'
            
                  
          })

      
      
        $urlRouterProvider.otherwise('/login')
    }]);
  
    app.run(['$state',function($state){
        //$state.go('register',undefined,{reload:true})
    
    }]);
})(CrudMongoose);