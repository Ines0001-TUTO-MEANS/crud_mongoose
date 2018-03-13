(function(app) {
	app.run(['$rootScope','AuthServices',function($rootScope,AuthServices){
    $rootScope.CrudMongooseGlobal={};
    $rootScope.CrudMongooseGlobal.connecting=false;
    $rootScope.CrudMongooseGlobal.user={};
    AuthServices.login('yutuyt','iuioui').then(function(data){
      console.log('CrudMongoose(run):promise:',data) 
    },function(err){
    
    
    })
  
  }])
})(CrudMongoose);