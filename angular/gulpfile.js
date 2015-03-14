
/* =======================================================
 *  gulpfile.js
 * =======================================================
 */

var   gulp	= require('gulp'),
      uglify = require('gulp-uglify'),
      concat = require('gulp-concat'),
      connect	= require('gulp-connect');

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

gulp.task('compress', function() {
  return gulp.src('js/*.js')
    .pipe(uglify())
    .pipe(gulp.dest('dist'));
});


gulp.task('minify', function() {
  return gulp.src('js/*.js')
    .pipe(concat('all.js'))
    .pipe(gulp.dest('./dist/'));
});

gulp.task('watch', function() {
  gulp.watch([paths.src], ['html']);
});


gulp.task('default', ['connect', 'watch']);
