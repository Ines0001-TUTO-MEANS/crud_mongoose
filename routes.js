/*

 Définitions des routes coté serveur


*/

  module.exports = function(app){
  // Routing
  //app.use('/api', require('./app/routes/authenticate')) // must before api/ routing
  //app.use('/api', require('./app/routes/users'))
  app.use('/', require('./app/route/tasks'))





  //app.use(authenticate)
  app.use('/', require('./app/route/user'))



  app.use(require('./app/utils/boom'))


}
