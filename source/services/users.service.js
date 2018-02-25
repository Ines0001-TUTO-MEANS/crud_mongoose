(function(app) {
	app.factory('User_factory', ['$resource', function($resource) {
      var action_parameters =   {'update': {  method: 'PUT'},
                                  'get':    {method:'GET'},
                                 // the $resource service expects a response that receives an array AND NOT an object
                                 // the server return all the todos after you create a record
                                 'save':   {method:'POST', isArray:true},
                                 'query':   {method:'GET', isArray:true},
                                 'delete':   {method:'DELETE'}
                                };
      return $resource('/api/v1/users/:id',
                       // paramètre résolue automatiquement sur $save(), $update(), $delete()
                       {id: '@_id',metafields:'true'},
                       action_parameters);

	}]);
})(CrudMongoose);
