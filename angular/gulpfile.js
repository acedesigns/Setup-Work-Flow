
/* =======================================================
 *  gulpfile.js
 * =======================================================
 */

var   gulp        = require('gulp'),
      uglify      = require('gulp-uglify'),
      concat      = require('gulp-concat'),
      uglifycss   = require('gulp-uglifycss'),
      concatCss   = require('gulp-concat-css'),
      minifyHTML  = require('gulp-minify-html')
      connect     = require('gulp-connect');

var paths = {
  app: './',
  src: [
    './*.html',
    './partials/*.html',
    './css/*.css',
    './js/*.js',
    './js/controllers/*.js',
    './js/directives/*.js',
    './js/filters/*.js',
    './js/modules/*.js'
    ]
};

gulp.task('connect', function() {
  connect.server({
    //root: paths.app, as it was producing ::: //Error: Forbidden
    root: [__dirname],
    livereload: true,
    port: 1987
  });
});


gulp.task('html', function() {
  gulp.src(paths.src)
    .pipe(connect.reload());
});

gulp.task('minify-html', function() {
  var opts = {
    conditionals: true,
    spare:true
  };

  return gulp.src('./partials/*.html')
    .pipe(minifyHTML(opts))
    .pipe(gulp.dest('./dist/'));
});

gulp.task('concatAndUglyfyJs', function() {
  return gulp.src([
    './js/*.js',
    './js/controllers/*.js',
    './js/directives/*.js',
    './js/filters/*.js',
    './js/modules/*.js'
    ])
    .pipe(concat({ path: 'myApp.js', stat: { mode: 0666 }}))
    .pipe(uglify())
    .pipe(gulp.dest('./js/dist/'));
});

gulp.task('UglyJsLibs', function() {
  return gulp.src([
    './js/lib/angular.min.js',
    './js/lib/angular-ui-router.min.js',
    './js/lib/angular-animate.min.js',
    './js/lib/angular-sanitize.min.js',
    './js/lib/angular-strap.min.js',
    './js/lib/angular-strap.tpl.min.js',
    './js/lib/lodash.min.js',
    './js/lib/angular-google-maps.min.js'
    ])
    .pipe(concat({ path: 'allLibs.js', stat: { mode: 0666 }}))
    .pipe(uglify())
    .pipe(gulp.dest('./js/dist/'));
});

gulp.task('watch', function() {
  gulp.watch([paths.src], ['html']);
});


gulp.task('default', [ 'connect', 'watch']);
