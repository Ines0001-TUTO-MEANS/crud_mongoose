(function(app) {
	app.run(['$rootScope',function($rootScope){
    $rootScope.CrudMongooseGlobal={};
    $rootScope.CrudMongooseGlobal.connecting=false;
    $rootScope.CrudMongooseGlobal.user={};
  
  }])
})(CrudMongoose);