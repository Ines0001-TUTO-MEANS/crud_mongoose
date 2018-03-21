var gulp = require('gulp');
var inject = require('gulp-inject');
var run = require('gulp-run');
var runSequence = require('run-sequence');
var browserSync = require('browser-sync').create();

//Config
var environment = './source', 
    bowerFolder = environment + '/bower_components',
    destination = ".",
    
    jsFiles = [
        'source/app.*.js',  
        'source/app/**/*.js',
        'source/components/**/*.js',
        'source/services/**/*.js',
        'source/shared/**/*.js',
        'source/modules/**/*.module.js',
        'source/modules/**/*.js'
    ],
    sassFiles = [
        'source/sass/**/*.scss',
        'source/css/**/*.*css',
        'source/components/**/*.scss',
        'source/shared/**/*.scss',
        'source/modules/**/*.scss',
        bowerFolder + '/angular-material/angular-material.min.css'
    ],
    bowerFiles = [
      bowerFolder + '/angular/angular.min.js',
      bowerFolder + '/angular-aria/angular-aria.min.js',
      bowerFolder + '/angular-animate/angular-animate.min.js',
      bowerFolder + '/angular-messages/angular-messages.min.js',
      bowerFolder + '/angular-cookies/angular-cookies.min.js',
      bowerFolder + '/angular-ui-router/release/angular-ui-router.min.js',
      bowerFolder + '/angular-resource/angular-resource.min.js',
      bowerFolder + '/angular-material/angular-material.min.js',
      bowerFolder + '/angular-material/angular-material.min.js'
    ];
  



gulp.task('index', htmlTask);
gulp.task('default', ['index']);
gulp.task('hello',function(){ console.log('hello gulp..')});
gulp.task('watch',watchTask);
gulp.task('refresh',refreshTask);
gulp.task('browser-sync', function() {
    browserSync.init({
        server: {
            baseDir: "./"
        }
    });
});

/*
Command refresh for synchronous result in glitch environnement.
*/

function refreshTask(){
   return run('refresh').exec();    // prints "Hello World\n". 
    
}

/*
Traitement de surveillance à appliquer
sur l'ensemble de l'arborescence
*/

function watchTask(){
   
  gulp.watch(sassFiles,['index'])

  gulp.watch(jsFiles,['index']);
  
  
  
}

/*
  Traitement des balises  inject:js
                          inject:css
*/
function htmlTask () {
  var app = jsFiles,
    css = sassFiles,
    bower = bowerFiles;
  
  return gulp.src(environment + '/index.html')
        //.pipe(gulp.dest(environment))
        .pipe(inject(gulp.src(css, {read: false}), {name: 'css', relative: true, addRootSlash: true}))
        .pipe(inject(gulp.src(app, {read: false}), {name: 'js', relative: true, addRootSlash: true}))
        .pipe(inject(gulp.src(bower, {read: false}), {name: 'bower', relative: true, addRootSlash: true}))
        .pipe(gulp.dest(environment))  
};



/*
function htmlTask () {
    return gulp.src('./src/index.html')
        .pipe(inject(gulp.src(jsFiles, {read: false}), {relative: true}))
        .pipe(gulp.dest('./src'));
};
*/

