module.exports = {
    server: {
        
            host: 'https://restfull-api.glitch.me',
            port: 0
    },
    database: {
        host: '',
        nameDb: 'mongodb',
        deployement:'ds239117.mlab.com',
        port: 39117,
        db: 'nodejs-test',
        username: 'admin',
        password: 'ines1970',
        getUri: function(){
          return (this.host = (this.nameDb+'://'+this.username+':'+this.password+'@'+this.deployement+':'+this.port+'/'+this.db));
           
        }
    },
    key: {
        privateKey: '37LvDSm4XvjYOh9Y',
        tokenExpiry: 60*60, //1 hour,
        clientId: '397172784826-oo8me91j1enfc5hp49485ult4jr8e33f.apps.googleusercontent.com',
        clientSecret: 'Ub656VSaCwV3yg59Q_B_qGXp',
        refreshToken: '1/btZPBOgvudQsVhF0yP28yJjQ3hVWbab6KsV0Z87qWtziSxX6ch2z3OucyTfY8qRE'
    },
    email: {
        username: "ines0001@gmail.com",
        password: "password",
        accountName: "ines0001@gmail.com",
        verifyEmailUrl: "verifyEmail/"
    }
};