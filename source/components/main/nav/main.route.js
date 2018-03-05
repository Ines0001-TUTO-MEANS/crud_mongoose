(function(app) {
    app.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {

        $stateProvider
          .state('register', {
            views:{
              'main':{
                  url: '/register',
                  templateUrl: 'components/register/user.register.html',
                  controller: 'RegisterController'
            }}})
          .state('users', {
            views:{
              'main':{
                  url: '/user',
                  templateUrl: 'components/users/nav/nav.html'
                  
            }}})

      
      
        //$urlRouterProvider.otherwise('/register')
    }]);
  
    app.run(['$state',function($state){
        $state.go('register',undefined,{reload:true})
    
    }]);
})(CrudMongoose);