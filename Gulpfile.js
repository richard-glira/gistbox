/**
 *
 * @type {Gulp}
 */

var gulp = require('gulp'),
    browserify = require('browserify'),
    babelify = require('babelify'),
    source = require('vinyl-source-stream');

gulp.task('browserify', function() {
    return browserify('./js/app.js')
        .transform(babelify, { stage: 0 })
        .bundle()
        .pipe(source('bundle.js'))
        .pipe(gulp.dest('js'));
});

gulp.task('watch', function() {
    gulp.watch('**/*.js', ['browserify']);
});
