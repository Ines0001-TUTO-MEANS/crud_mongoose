(function(app) {
	app.run(['$rootScope','$transitions','AuthServices',function($rootScope,$transitions,AuthServices){
    $rootScope.CrudMongooseGlobal={};
    $rootScope.CrudMongooseGlobal.connecting=false;
    $rootScope.CrudMongooseGlobal.user={};
    
    $transitions.onSuccess({}, function(transition) {
      console.log(
          "Successful Transition from " + transition.from().name +
          " to " + transition.to().name
      );
    });
    
    $transitions.onBefore({}, function(transition) {
      // check if the state should be protected
      
        console.log(
          "onBefore Transition", transition)
      
      
    })
    
    
  
  }])
})(CrudMongoose);