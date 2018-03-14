(function(app) {
    app.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {

        $stateProvider
        .state('users', {
                url: '/users',
                views:{
                  'content':{
                     templateUrl: 'components/users/index.html' 
                  }
                }
                
            })
        .state('users.list', {
                url: '/list',
                templateUrl: 'components/users/list/users.list.html',
                controller: 'UsersListController'
            })
        .state('users.detail', {
                url: '/detail/:idUser',
                templateUrl: 'components/users/detail/user.detail.html',
                controller: 'UserDetailController'
            })
        .state('users.create', {
                url: '/create',
                templateUrl: 'components/users/create/user.create.html',
                controller: 'UserCreateController'
            })
      
      
        //$urlRouterProvider.otherwise('/users/list')
    }]);
  
    app.run(['$state',function($state){
        //$state.go('register',undefined,{reload:true})
    
    }]);
})(CrudMongoose);
