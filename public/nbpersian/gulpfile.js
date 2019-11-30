var gulp = require('gulp');

gulp.task('connect', function() {
    connect.server({
        root: './',
        livereload: true
    });
});

// sass task
gulp.task('sass', function() {
    return gulp.src('./src/styles/app.scss')
        .pipe(sass({ outputStyle: 'compressed' }).on('error', sass.logError))
        .pipe(gulp.dest('./dist/styles'))
        .pipe(connect.reload());
});


gulp.task('html', function() {
    gulp.src('./*.html')
        .pipe(connect.reload());
});

gulp.task('watch', function() {
    gulp.watch(['./src/styles/modules/*.scss'], ['sass']);
    gulp.watch(['./*.html'], ['html']);
});

gulp.task('default', ['connect', 'watch']);
