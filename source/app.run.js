(function(app) {
	app.run(['$rootScope','AuthServices',function($rootScope,AuthServices){
    $rootScope.CrudMongooseGlobal={};
    $rootScope.CrudMongooseGlobal.connecting=false;
    $rootScope.CrudMongooseGlobal.user={};
    
    
    
  
  }])
})(CrudMongoose);