const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const autoprefixer = require('gulp-autoprefixer');
const cleanCSS = require('gulp-clean-css');
const connect = require('gulp-connect');

// Compile SASS
gulp.task('sass', function() {
  return gulp.src('src/scss/main.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(autoprefixer())
    .pipe(cleanCSS())
    .pipe(gulp.dest('dist/css'))
    .pipe(connect.reload());
});

// Copy HTML
gulp.task('html', function() {
  return gulp.src('src/*.html')
    .pipe(gulp.dest('dist'))
    .pipe(connect.reload());
});

// Copy JS
gulp.task('js', function() {
  return gulp.src('src/js/**/*.js')
    .pipe(gulp.dest('dist/js'))
    .pipe(connect.reload());
});

// Watch files
gulp.task('watch', function() {
  gulp.watch('src/scss/**/*.scss', gulp.series('sass'));
  gulp.watch('src/*.html', gulp.series('html'));
  gulp.watch('src/js/**/*.js', gulp.series('js'));
});

// Server
gulp.task('serve', function() {
  connect.server({
    root: 'dist',
    livereload: true,
    port: 8080
  });
});

// Default task
gulp.task('default', gulp.series('sass', 'html', 'js'));
gulp.task('dev', gulp.series('default', gulp.parallel('watch', 'serve')));