(function(app) {
    app.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {

        $stateProvider.state('list', {
            url: '/users/list',
            templateUrl: 'components/users/list/users.list.html',
            controller: 'UsersListController'
        })

        .state('detail', {
            url: '/user/list/:idUser',
            templateUrl: 'components/users/detail/user.detail.html',
            controller: 'UserDetailController'
        })
      
        $urlRouterProvider.otherwise('/users/list')
    }]);
  
    app.run(['$state',function($state){
        //$state.go('list',undefined,{reload:true})
    
    }]);
})(CrudMongoose);
