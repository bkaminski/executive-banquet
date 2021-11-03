const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const bourbon = require('node-bourbon');
const browserSync = require('browser-sync').create();
const $ = require('gulp-load-plugins')();

const onError = function (err) {
    $.util.beep();
    console.log(err.toString());
    this.emit('end');
};

function style() {
    return gulp.src('assets/styles/scss/style.scss')
        .pipe($.plumber({errorHandler: onError}))
        .pipe($.sourcemaps.init())
        .pipe(sass({
            // includePaths: require('node-bourbon').with('other/path', 'another/path')
            // - or -
            includePaths: require('node-bourbon').includePaths
          }))
        .pipe($.rename('dmiStyles.min.css'))
        .pipe($.autoprefixer())
        .pipe($.sourcemaps.write('./'))
        .pipe(gulp.dest('assets/styles'))
        .pipe(browserSync.stream())
        .pipe($.notify('SASS complied and minified successfully ♪♪ｖ(⌒ｏ⌒)ｖ♪♪ '));
}

function js() {
    return gulp.src('assets/js/partials/*.js')
        .pipe($.plumber({errorHandler: onError}))
        .pipe($.concat('scripts.js'))
        .pipe(gulp.dest('assets/js'))
        .pipe($.rename('dmiScripts.min.js'))
        .pipe($.uglify())
        .pipe(gulp.dest('assets/js'))
        .pipe($.notify('JavaScript comped and minified successfully ♪♪ｖ(⌒ｏ⌒)ｖ♪♪ '));
} 

function watch() {
    browserSync.init({
        //CHANGE THIS ADDRESS TO BE PROJECT SPECIFIC
        proxy: "localhost/banquet",
    });
    gulp.watch('assets/styles/scss/**/*.*ss', style).on('change', browserSync.reload);
    gulp.watch('assets/js/partials/*.js', js).on('change', browserSync.reload);
    gulp.watch('**/**/*.php').on('change', browserSync.reload);
    
};
    
exports.style = style;
exports.watch = watch;