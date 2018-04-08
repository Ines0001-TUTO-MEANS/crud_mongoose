var Boom = require('boom');


module.exports = function (err,req, res, next) {
   if(Boom.isBoom(err))
      return res.status(err.output.statusCode).send(err)
   next(err);
};