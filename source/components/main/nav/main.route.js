(function(app) {
    app.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {

        $stateProvider
          .state('error1', {
            url: '/error1',
            templateUrl: 'components/error/page/error.page.html',
              
          })
          .state('error1.error2', {
            url: '/error2',
            templateUrl: 'components/error/page/error.page2.html',
            controller: function($scope) {
              $scope.error = {status:'error'};
            }
                  
          })

      
      
        $urlRouterProvider.otherwise('/error1')
    }]);
  
    app.run(['$state',function($state){
        //$state.go('register',undefined,{reload:true})
    
    }]);
})(CrudMongoose);