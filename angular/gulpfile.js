
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
      useref      = require('gulp-useref'),
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

gulp.task('UglifyCSS', function () {
  gulp.src([
      './css/lib/bootstrap.css',
      './css/lib/font-awesome.min.css',
      './css/lib/angular-motion.min.css',
      './css/lib/bootstrap-additions.min.css',
      './css/lib/component.css',
      './css/lib/loading-bar.css',
      './css/main.css'
      ])
    .pipe(concat({ path: 'styles.css'}))
    .pipe(uglifycss({
      "max-line-len": 80
    }))
    .pipe(gulp.dest('./dist/css'));
});

gulp.task('minifyhtml', function() {
  var opts = {
    conditionals: true,
    spare:true
  };

  return gulp.src('./partials/*.html')
    /*.pipe(concat({ path: 'allHtml.html'}))*/
    .pipe(minifyHTML(opts))
    .pipe(gulp.dest('./dist/partials'));
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
    './js/lib/angular-google-maps.min.js',
    './js/lib/modernizr.custom.js',
    './js/lib/loading-bar.min.js',
    './js/lib/ng-table.min.js',
    './js/lib/ckeditor.min.js'
    ])
    .pipe(concat({ path: 'libs.js', stat: { mode: 0666 }}))
    .pipe(uglify())
    .pipe(gulp.dest('./dist/js/'));
});

gulp.task('AppJs', function() {
  return gulp.src([
    './js/app.js',
    './js/globalController.js',
    './js/controllers/home.js',
    './js/controllers/about.js',
    './js/controllers/contact.js',
    './js/directives/slider.js',
    './js/filters/filter.js'    
    ])
    .pipe(concat({ path: 'aceApp.js', stat: { mode: 0666 }}))
    .pipe(uglify())
    .pipe(gulp.dest('./dist/js/'));
});

gulp.task('watch', function() {
  gulp.watch([paths.src], ['html']);
});

gulp.task('useref', function () {
    var assets = useref.assets();

    return gulp.src('./partials/*.html')
        .pipe(assets)
        .pipe(assets.restore())
        .pipe(useref())
        .pipe(gulp.dest('dist'));
});


gulp.task('default', ['watch', 'connect', 'UglifyCSS', 'minifyhtml', 'UglyJsLibs', 'AppJs']);
 