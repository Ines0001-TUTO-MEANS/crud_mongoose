(function(app) {
	app.run(['$rootScope','AuthServices',function($rootScope,AuthServices){
    $rootScope.CrudMongooseGlobal={};
    $rootScope.CrudMongooseGlobal.connecting=false;
    $rootScope.CrudMongooseGlobal.user={};
    
    
    AuthServices.login({email:'emmanuel001@gmail.com',password:'ines'}).then(function(data){
      console.log('CrudMongoose(run):resolve:',data) 
    },function(err){
      console.log('CrudMongoose(run):reject:',data) 
    
    })
  
  }])
})(CrudMongoose);