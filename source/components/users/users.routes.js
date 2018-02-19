(function(app) {
    app.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {

        $stateProvider.state('list', {
            url: '/users',
            templateUrl: 'components/users/list/users.list.html',
            controller: 'UsersListController'
        })

        .state('detail', {
            url: '/users/:idUser',
            templateUrl: 'components/users/detail/user.detail.html',
            controller: 'UserDetailController'
        })
      
        $urlRouterProvider.otherwise('/users')
    }]);
})(CrudMongoose);
