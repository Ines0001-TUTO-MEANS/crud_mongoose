# Welcome to the CRUD MONGOOSE BETA by Ines0001


Fournir un serveur RESTfuly pour la gestion de fiche `Person` rattaché à des fiche de type `Task`

## Utilitaires

[packages utiles](https://delicious-insights.com/fr/articles/libs-node-js/)

## Source d'information

**Design front**
1. [Material Login/Register form](https://www.supinfo.com/articles/single/184-decouverte-angular-material)
1. [Progress Circular in md-button](https://codepen.io/1kohei1/pen/XbwMLQ?editors=1010)
1. [Confirm password validation angularjs material design
](https://stackoverflow.com/questions/45102658/confirm-password-validation-angularjs-material-design)

**Routing**
1. [ui-router Multiple name View](https://github.com/angular-ui/ui-router/wiki/Multiple-Named-Views)

1. [ui-router Redirecting a transition](https://ui-router.github.io/guide/transitionhooks)


**Authentification via token:**
1. Authenticate a Node.js API with JSON Web Tokens [about scotch.io/tutorials](https://scotch.io/tutorials/authenticate-a-node-js-api-with-json-web-tokens).
2. très bonne source d'information sur le mécanisme de passage du token by [Angular Security - Authentication With JSON Web Tokens (JWT): The Complete Guide](https://blog.angular-university.io/angular-jwt-authentication/)
3. AUtre source en français [AUTHENTIFICATION D’API VIA JWT ET LES COOKIES](http://website.simplx.fr/blog/2016/09/27/authentification-api-via-jwt-et-cookies/)

**Email Verification in Node Solution**
1. [Email Verification in Node](https://codemoto.io/coding/nodejs/email-verification-node-express-mongodb)
1. [email verification](https://github.com/whitef0x0/node-email-verification)
1. [Node for API: Express et Hapi en pratique](https://blog.octo.com/node-for-api-express-and-hapi-en-pratique/)
1. [A quick way to work with Hapi.js, Mongoose, Angular.js](https://www.cronj.com/blog/hapi-mongoose/)

**Bower**
1. [MOMENT.JS - MANIPULER LES DATES JAVASCRIPT SIMPLEMENT](https://momentjs.com/)
```
var expires = moment().add('days', 7).valueOf();
```

**JWT**
1. Etape de vérification du user et si celui-ci a les droits (admin, habilitation,...)
Envoie d'un token via JWT
```
// =======================
var express     = require('express');
var app         = express();
var bodyParser  = require('body-parser');
...

var jwt    = require('jsonwebtoken'); // used to create, sign, and verify tokens

// =======================
// configuration =========
// =======================
app.set('superSecret', config.secret); // secret variable

// use body parser so we can get info from POST and/or URL parameters
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
...
// if user is found and password is right
// create a token with only our given payload
// we don't want to pass in the entire user since that has the password
apiRoutes.post('/authenticate', function(req, res) {
      ... Analyse User admin et validité de son mot de passe
      const payload = {admin: user.admin };
      var token = jwt.sign(payload, app.get('superSecret'), {
        expiresInMinutes: 1440 // expires in 24 hours
      });

      // return the information including token as JSON
      res.json({
        success: true,
        message: 'Enjoy your token!',
        token: token
      });
})  
```
Dans les entêtes de requêtes utilisées ont vérifie si le token est bien présent
et si oui est il valide
```
// route middleware to verify a token
apiRoutes.use(function(req, res, next) {

  // check header or url parameters or post parameters for token
  var token = req.body.token || req.query.token || req.headers['x-access-token'];

  // decode token
  if (token) {

    // verifies secret and checks exp
    jwt.verify(token, app.get('superSecret'), function(err, decoded) {      
      if (err) {
        return res.json({ success: false, message: 'Failed to authenticate token.' });    
      } else {
        // if everything is good, save to request for use in other routes
        req.decoded = decoded;    
        next();
      }
    });

  } else {

    // if there is no token
    // return an error
    return res.status(403).send({ 
        success: false, 
        message: 'No token provided.' 
    });

  }
});


```

## Mon Projet

### Arhitecture

### Serveur

### Client

On the front-end,
- edit `public/client.js`, `public/style.css` and `views/index.html`
- drag in `assets`, like images or music, to add them to your project

On the back-end,
- your app starts at `server.js`
- add frameworks and packages in `package.json`
- safely store app secrets in `.env` (nobody can see this but you and people you invite)


Made by [Ines0001](https://github.com/Ines0001-TUTO-MEANS/crud_mongoose)
-------------------

\ ゜o゜)ノ
