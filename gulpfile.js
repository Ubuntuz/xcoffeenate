var gulp = require('gulp');
var coffee = require('gulp-coffee');
var stylus = require('gulp-stylus');
var sourcemaps = require('gulp-sourcemaps');
var del = require('del');
var gutil = require('gulp-util');
var plumber = require('gulp-plumber');
var autoprefixer = require('gulp-autoprefixer');
var koutoswiss = require('kouto-swiss');
var changed = require('gulp-changed');
var coffeelint = require('gulp-coffeelint');
var livereload = require('gulp-livereload');
var preprocess = require('gulp-preprocess');

// Update these paths to fit your structure
var paths = {
  scripts: 'src/scripts/**/*.coffee',

  styles: [
    'src/styles/**/*.styl',
    '!src/styles/partials/**/*.styl',
    '!src/styles/modules/**/*.styl'
  ],

  html: [
    'src/html/*.html',
    '!src/html/partials/**/*.html'
  ],

  images: 'src/images/**/*',

  copy: [
    'src/**/*',
    '!src/{scripts,scripts/**}',
    '!src/{styles,styles/**}',
    '!src/{images,images/**}',
    '!src/html/*.html',
    '!src/html/partials/**/*.html'
  ]
};

// Emancipate yourself from build-folder slavery
// None but ourselves can free our project
//    - Bob Marley
gulp.task('clean', function(cb) {
  del(['build'], cb);
});

// Transpile coffee, minify and provide sourcemaps
gulp.task('scripts', function() {
  return gulp.src(paths.scripts)
    .pipe(plumber())
    .pipe(changed('build/scripts', {extension: '.js'}))
    .pipe(sourcemaps.init())
    .pipe(coffeelint({
      no_tabs: { level: "ignore" },
      indentation: { value: 1 },
      max_line_length: { level: "ignore" }
    }))
    .pipe(coffeelint.reporter())
    .pipe(coffee())
    .pipe(sourcemaps.write())
    .pipe(gulp.dest('build/scripts'))
    .pipe(livereload());
});

// Process styling and minify
gulp.task('styles', function(){
  return gulp.src(paths.styles)
    .pipe(plumber())
    .pipe(changed('build/styles', {extension: '.css'}))
    .pipe(stylus({ use: koutoswiss() }))
    .pipe(autoprefixer({ browser: 'Last 3 versions' }))
    .pipe(gulp.dest('build/styles'))
    .pipe(livereload());
});

// Copy all images
gulp.task('images', function() {
  return gulp.src(paths.images)
    .pipe(plumber())
    .pipe(changed('build/images'))
    .pipe(gulp.dest('build/images'))
    .pipe(livereload());
});

// Process html
gulp.task('html', function () {
  return gulp.src(paths.html)
    .pipe(plumber())
    .pipe(preprocess())
    .pipe(gulp.dest('build/'))
    .pipe(livereload());
});

// Copy anything that's not transpiled
gulp.task('copy', function() {
  return gulp.src(paths.copy)
    .pipe(gulp.dest('./build/'));
});

// Do a complete build
gulp.task('build', function() {
  gulp.start('scripts', 'styles', 'images', 'html', 'copy')
});

// Rerun the task when a file changes
gulp.task('watch', function() {
  livereload.listen();
  gulp.watch(paths.scripts, ['scripts']);
  gulp.watch(paths.styles, ['styles']);
  gulp.watch(paths.images, ['images']);
  gulp.watch(paths.html, ['html']);
});

// The default task (called when you run `gulp` from cli)
gulp.task('default', function(){
  gutil.log('No default task, use', gutil.colors.green('gulp <task>'), 'instead');
  gutil.log('Tasks available:');
  gutil.log(gutil.colors.green('gulp clean'), 'to clean the project of previous builds');
  gutil.log(gutil.colors.green('gulp scripts'), 'to build scripts');
  gutil.log(gutil.colors.green('gulp styles'), 'to build styles');
  gutil.log(gutil.colors.green('gulp images'), 'to build images');
  gutil.log(gutil.colors.green('gulp build'), 'to make a complete build without deploying');
  gutil.log(gutil.colors.green('gulp watch'), 'to trigger builds when files are saved');
});