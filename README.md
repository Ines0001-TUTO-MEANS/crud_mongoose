# Welcome to the CRUD MONGOOSE BETA by Ines0001


Fournir un serveur RESTfuly pour la gestion de fiche `Person` rattaché à des fiche de type `Task`


## Source d'information


1. Authenticate a Node.js API with JSON Web Tokens [about scotch.io/tutorials](https://scotch.io/tutorials/authenticate-a-node-js-api-with-json-web-tokens).
2. Item2
### authentification with JWT
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
