(function(app) {
	app.service('Boom_service', ['', function() {
      var first_name ='';
      return {
          get name() {
              return ':' + first_name;
          },
          set name(val) {
              first_name = 'Mr ' + val;
          }
      }

	}]);
})(CrudMongoose);