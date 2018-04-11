


module.exports = function(app){
  // Routing
  //app.use('/api', require('./app/routes/authenticate')) // must before api/ routing
  //app.use('/api', require('./app/routes/users'))
  app.use('/', require('./app/routes/tasks'))





  //app.use(authenticate)
  app.use('/', require('./app/controller/route'))



  app.use(require('./app/utils/boom'))


}
