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
            templateUrl: 'components/testPage/page.html',
            controller: function($scope) {
              $scope.message = {Page:'login'};
            }
                  
          })

      
      
        $urlRouterProvider.otherwise('/register')
    }]);
  
    app.run(['$state',function($state){
        //$state.go('register',undefined,{reload:true})
    
    }]);
})(CrudMongoose);