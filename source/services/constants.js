// constants.js

(function(app) {
	'use strict';
  app.constant('version', '0.1.0')
     .constant('cookies_exprires',moment().add(1,'minutes').toDate()) 
})(CrudMongoose);
