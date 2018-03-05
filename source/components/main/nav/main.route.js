(function(app) {
    app.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {

        $stateProvider
          .state('register', {views:{'main':{
            url: '/register',
            templateUrl: 'components/register/user.register.html',
            controller: 'RegisterController'  
          }}})
          .state('error', {
            url: '/error',
            templateUrl: 'components/error/page/error.page.html',
            controller: "ErrorPageController"
                  
          })

      
      
        $urlRouterProvider.otherwise('/register')
    }]);
  
    app.run(['$state',function($state){
        //$state.go('register',undefined,{reload:true})
    
    }]);
})(CrudMongoose);