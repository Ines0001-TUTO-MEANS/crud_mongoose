(function(app) {
    app.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {

        $stateProvider.state('list', {
            url: '/users/list',
            templateUrl: 'components/users/list/users.list.html',
            controller: 'UsersListController'
        })
        .state('detail', {
            url: '/user/detail/:idUser',
            templateUrl: 'components/users/detail/user.detail.html',
            controller: 'UserDetailController'
        })
        .state('create', {
            url: '/user/create',
            templateUrl: 'components/users/create/user.create.html',
            controller: 'UserCreateController'
        })
      .state('register', {
            url: '/user/register',
            templateUrl: 'components/users/register/user.register.html',
            controller: ''
        })
      
        $urlRouterProvider.otherwise('/users/register')
    }]);
  
    app.run(['$state',function($state){
        $state.go('register',undefined,{reload:true})
    
    }]);
})(CrudMongoose);
