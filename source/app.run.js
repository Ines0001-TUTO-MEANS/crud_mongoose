(function(app) {
	app.run(['$rootScope','$transitions','AuthServices','$cookies',function($rootScope,$transitions,AuthServices,$cookies){
    
    // Init user session with cookies value
    AuthServices.user = $cookies.get('user')
    
    $transitions.onSuccess({}, function(transition) {
      console.log(
          "Successful Transition from " + transition.from().name +
          " to " + transition.to().name
      );
    });
    
    $transitions.onBefore({}, function(transition) {
      // check if the state should be protected
      if( transition.to().login && 
        console.log(
          "onBefore Transition", transition)
      
      
    })
    
    
  
  }])
})(CrudMongoose);