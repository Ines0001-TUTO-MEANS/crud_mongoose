(function(app) {
    app.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {

        $stateProvider.state('list', {
          views:{
            'users':{
                url: '/users/list',
                templateUrl: 'components/users/list/users.list.html',
                controller: 'UsersListController'
            }}})
        .state('detail', {
          views:{
            'users':{
                url: '/user/detail/:idUser',
                templateUrl: 'components/users/detail/user.detail.html',
                controller: 'UserDetailController'
            }}})
        .state('create', {
          views:{
            'users':{
                 url: '/user/create',
                templateUrl: 'components/users/create/user.create.html',
                controller: 'UserCreateController'
            }}})
      
      
        //$urlRouterProvider.otherwise('/users/list')
    }]);
  
    app.run(['$state',function($state){
        //$state.go('register',undefined,{reload:true})
    
    }]);
})(CrudMongoose);
