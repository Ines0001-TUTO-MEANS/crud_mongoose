(function(app) {
	app.run(['$rootScope','$transitions','AuthServices','$cookies',function($rootScope,$transitions,AuthServices,$cookies){
    
    // Init user session with cookies value
    AuthServices.user = $cookies.get('user') || undefined;
    console.log('run.app: AuthServices.user',AuthServices.user)
    
    /*
    Redirecting a transition 
    A transition hook can redirect a transition to a different state and/or parameter values by returning a new TargetState. A TargetState can be created using the StateService.

    This hook redirects an unauthenticated user to a login state.
    
    */
    
    $transitions.onBefore({ to: 'users.**' }, function(transition) {
      // check if the state should be protected
      if (!AuthServices.isAuthenticated()) {
        // redirect to the 'login' state
        return transition.router.stateService.target('login');
      }
      
    })
    
    $transitions.onBefore({ to: 'login' }, function(transition) {
       const stateService = transition.router.stateService;
      // check if the state should be protected
      if (AuthServices.isAuthenticated()) {
        // redirect to the 'login' state
        return stateService.target('home');
      }
      
      
    })
    
    
  
  }])
})(CrudMongoose);