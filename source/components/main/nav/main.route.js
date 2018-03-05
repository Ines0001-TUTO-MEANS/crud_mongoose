(function(app) {
    app.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {

        $stateProvider
          .state('register', {
            url: '/register',
            templateUrl: 'components/register/user.register.html'
              
          })
          .state('register.error', {
            url: '/error',
            templateUrl: 'components/error/page/error.page.html',
            controller: function($scope) {
              $scope.error = {status:'error'};
            }
                  
          })

      
      
        $urlRouterProvider.otherwise('/register')
    }]);
  
    app.run(['$state',function($state){
        //$state.go('register',undefined,{reload:true})
    
    }]);
})(CrudMongoose);