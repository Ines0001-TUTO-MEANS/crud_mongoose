(function(app) {
	app.run(['$rootScope',function($rootScope){
    $rootScope.CrudMongoose={};
    $rootScope.CrudMongoose.connecting=false;
    $rootScope.CrudMongoose.user={};
        
  
  }])
})(CrudMongoose);