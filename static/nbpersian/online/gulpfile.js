var gulp = require('gulp');
var concatCss = require('gulp-concat-css');
var minifyCss = require('gulp-minify-css');

gulp.task('concat', function() {
    return gulp.src('css/*.css')
        .pipe(concatCss('app.css'))
        .pipe(gulp.dest(''));
});

gulp.task('min-css', function() {
    return gulp.src('app.css')
        .pipe(minifyCss({ compatibility: 'ie8' }))
        .pipe(gulp.dest(''));
});

gulp.task('default',["concat", "min-css"]);
