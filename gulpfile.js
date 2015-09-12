var gulp = require("gulp");
var browserSync = require('browser-sync');

var reload = browserSync.reload;

gulp.task("browser-sync", function () {
    browserSync({
        // proxy: "localhost",
        // reloadDelay: 1000,
        server: {
            baseDir: "./"
        }
    });
});

gulp.task("watch", function() {
    gulp.watch(["**/*.html", "css/**/*.css"], reload);
});

gulp.task("default", ["browser-sync", "watch"]);
