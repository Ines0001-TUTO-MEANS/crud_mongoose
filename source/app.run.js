(function(app) {
	app.run(['$rootScope',function($rootScope){
    $rootScope.rootCrud={};
    $rootScope.rootCrud.connecting=false;
    $rootScope.rootCrud.user={};
        
  
  }])
})(CrudMongoose);