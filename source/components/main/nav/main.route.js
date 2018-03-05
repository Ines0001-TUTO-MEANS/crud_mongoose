(function(app) {
    app.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {

        $stateProvider.state('register', {
          views:{
            'register':{
                url: '/register',
                templateUrl: 'components/register/user.register.html',
                controller: 'RegisterController'
            }}})
        
      
      
        $urlRouterProvider.otherwise('/register')
    }]);
  
    app.run(['$state',function($state){
        //$state.go('register',undefined,{reload:true})
    
    }]);
})(CrudMongoose);