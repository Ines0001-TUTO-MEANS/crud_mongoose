(function(app) {
    app.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {

        $stateProvider
        .state('tasks', {
                url: '/tasks',
                abstract: true,
                views:{
                  'content':{
                     templateUrl: 'components/tasks/index.html' 
                  }
                }
                
            })
        .state('tasks.list', {
                url: '/list',
                templateUrl: 'components/tasks/list/tasks.list.html',
                controller: 'tasksListController'
            })
        .state('tasks.detail', {
                url: '/detail/:idUser',
                templateUrl: 'components/tasks/detail/user.detail.html',
                controller: 'TaskDetailController'
            })
        .state('tasks.create', {
                url: '/create',
                templateUrl: 'components/tasks/create/user.create.html',
                controller: 'TaskCreateController'
            })
      
      
        //$urlRouterProvider.otherwise('/tasks/list')
    }]);
  
    app.run(['$state',function($state){
        //$state.go('register',undefined,{reload:true})
    
    }]);
})(CrudMongoose);
