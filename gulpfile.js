var gulp = require('gulp');
var browserSync = require('browser-sync').create();

gulp.task('default', function(){
    browserSync.init({
      server: './src/templates'
    });

    gulp.watch("src/css/*.css").on('change', browserSync.reload);
    gulp.watch("src/js/*.js").on('change',browserSync.reload);
    gulp.watch("src/templates/*.html").on('change', browserSync.reload);
});


