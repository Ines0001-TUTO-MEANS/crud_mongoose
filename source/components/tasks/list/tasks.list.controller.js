(function(app) {
	app.controller('tasksListController', ['$scope','$rootScope','$cookies','$state','TaskFactory','$mdDialog',function($scope,$rootScope,$cookies,$state,TaskFactory,$mdDialog) {
    $scope.tasks={};
    $scope.$parent.currentNavItem = 'tasks.list';
    
    
    ListTask();
    
    $scope.detail = function(task){
      $scope.$emit('EVENT_MAIN_NOTIFICATION',{state:'tasks.detail',id:task._id})
      
      
    }
     
    $scope.delete = function(task){
      
      var confirm = $mdDialog.confirm()
          .title('Voulez-vous vraiment supprimer la fiche '+task.name+'?')
          .ariaLabel('Lucky day')
          .ok('Oui')
          .cancel('Non');

      $mdDialog.show(confirm).then(function() {
          EraseTask(task._id);
          
        });
      
    }
     
    function ListTask(){
      TaskFactory.query(function(data){
            $scope.tasks = data;

      },function(err){
          $scope.tasks = [];
          $state.go('error',{status:err.status,message:err.data.message},{reload:true});
      })
    
    }
    
    function EraseTask(id){
     TaskFactory.delete(
          {id:id},
          function(data){
             // success
             ListTask();
            //$state.reload();
          },function(err){
             // error
             $state.go('error',{status:err.status,message:err.data.message},{reload:true});
          })
    }
   
    
   
    
     
    
	}]);
})(CrudMongoose);