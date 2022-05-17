var gulp = require('gulp'),
      uglify = require('gulp-uglify'),
      
      minificss = require('gulp-minify-css'),
      cleanCss = require('gulp-clean-css'),
      del = require('del'),
    //   stripDebug = require('gulp-strip-debug'),
    //   concat  = require('gulp-concat'),
      connect = require('gulp-connect-php'),
      browserSync = require('browser-sync');
    //   plumber = require('gulp-plumber');
    //   fileinclude = require('gulp-file-include');
    //   include = require('gulp-html-tag-include');
// const debug = require('gulp-debug');  
// const using = require('gulp-using');  
var babel = require('gulp-babel');
var sass = require('gulp-sass')(require('sass'));
var devsrc = './css/';
var pubsrc = './css/';
var paths = {
    "dev" : {
        "css" : devsrc + 'sass/*.scss'
        // "js" : devsrc + 'js/*.js',
        // "importjs" : devsrc + 'js/*.js'
    },
    "pub" : {
        "css" : pubsrc 
        // "html" : pubsrc
    }
};   



gulp.task('babel', function() {
//   return gulp.src('src/**/*.js')
//     .pipe(babel())
//     .pipe(gulp.dest('out'));
    
    return gulp.src('./src/main/js/ecma6/*.js')
    .pipe(babel())
    .pipe(gulp.dest('./src/main/js/portal/'));
    
});


function handleError(err) {
    console.log(err);
    this.emit('end');
  }
// gulp.task('fileinclude', function() {
//     return gulp.src([
//         "./src/*.html", // ★★★★ 불러올 파일의 위치
//         "!" + "./src/include/*" // ★★★★ 읽지 않고 패스할 파일의 위치
//     ])
//     .pipe(fileinclude({
//         prefix: '@@',
//         basepath: '@file'
//         }))
//     .pipe(gulp.dest('./LM_module/')) // ★★★★ 변환한 파일의 저장 위치 지정
//     .pipe(browserSync.reload({ stream : true }));
// });

// gulp.task('connect-sync', function() {
//     connect.server({}, function (){
//       browserSync({
//         proxy: 'localhost:8080'
//       });
//     });
// });

// gulp.task('gulp_js', function(){
//     return gulp.src(paths.dev.js, {sourcemaps: true})
//     // .pipe(uglify())
//     // .pipe(debug( function(){ logger(message) } ))
//     .pipe( stripDebug() )
//     .pipe(plumber()).on('error', handleError)
//     .pipe(gulp.dest(paths.pub.js))
//     .pipe(browserSync.reload({ stream : true }));    
    

// });

// gulp.task('combine', function() {
//     gulp.src([
//         'LM_module/src/js/import/*.js'
//     ]).pipe( uglify() ).pipe( stripDebug() ).pipe( concat('comb.js')).pipe( gulp.dest('LM_module/js/') )
//     .pipe(browserSync.reload({ stream : true }));
// });

gulp.task('gulp_css', function(){
    return gulp.src(paths.dev.css)
    .pipe(sass().on('error', sass.logError))
    .pipe(cleanCss({ compatibiliy: 'ie8' }))
    .pipe(gulp.dest(paths.pub.css))
    .pipe(browserSync.reload({ stream : true }));
});

// gulp.task('gulp_html', function(){
//     return gulp.src(paths.dev.html)
//     .pipe(gulp.dest(paths.pub.html));
// });

// gulp.task('html-include', function() {
//     return gulp.src('./src/*.html')
//         .pipe(include())
//         .pipe(gulp.dest('./LM_module/'))
//         .pipe(browserSync.reload({ stream : true }));
// });



// gulp.task('importModuleMC', function () {
//     gulp.src('LM_module/src/js/import/*.js')
//         .pipe(uglify())
//         .pipe(concat('importCompile.js'))
//         .pipe(gulp.dest('LM_module/js/'))
//         .pipe(browserSync.reload({ stream : true }));
// });


gulp.task('gulp_watch', function(){
    // gulp.watch(paths.dev.include, gulp.series('fileinclude'));
    gulp.watch(paths.dev.css, gulp.series('gulp_css')).on('change',browserSync.reload);
    gulp.watch('./src/main/webapp/js/ecma6/*.js', gulp.series('babel')).on('change',browserSync.reload);
    // gulp.watch(paths.dev.importjs ,gulp.series('importModuleMC'));
    // gulp.watch(paths.dev.html, gulp.series('gulp_html'));
    // gulp.watch(paths.dev.include , gulp.series('fileinclude'));
    // gulp.watch(paths.dev.html , gulp.series('fileinclude'));    
});

gulp.task('clean', function(){
    del([pubsrc + '/css/*.css']);
    del([pubsrc + '/js/*.js']);
});

// gulp.task('browserSync', function () {
//     return browserSync.init({ port : 8001, server: { baseDir: './' } });
// });

gulp.task('default', gulp.parallel( 'gulp_css','babel', 'gulp_watch'  ));
gulp.task('dev',gulp.parallel('clean', 'gulp_css' , 'babel', 'gulp_watch' ))

//아래 설치하기
// npm i gulp gulp-uglify gulp-minify-css gulp-clean-css del gulp-connect-php browser-sync gulp-babel gulp-sass sass @babel/preset-env @babel/core