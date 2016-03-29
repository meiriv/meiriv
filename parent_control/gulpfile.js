var gulp        = require('gulp');
var browserSync = require('browser-sync').create();
var reload      = browserSync.reload;

// Save a reference to the `reload` method

// Watch scss AND html files, doing different things with each.
gulp.task('start', function () {

    // Serve files from the root of this project
    browserSync.init({
        server: {
            baseDir: "public",
            index: "index.html",
            port: 8080
        }
    });

// Reload the browser page on any html, CSS, js change
    gulp.watch("public/**/*.{html,css,js}").on('change', browserSync.reload);
});