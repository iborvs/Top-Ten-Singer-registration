const gulp = require("gulp");
const cleanCSS = require('gulp-clean-css');
const uglify = require('gulp-uglify');
const pump = require('pump');

gulp.task("move", function () {

    // 将html移到dist
    gulp.src("./src/html/*.html").
        pipe(gulp.dest("./dist/html"));
    
    // img
    gulp.src("./src/img/*.png").
        pipe(gulp.dest("./dist/img"));
});

gulp.task('minCss', function (cb) {
    pump([
        gulp.src('./src/css/*.css'),
        cleanCSS(),
        gulp.dest("./dist/css")
    ], cb);
});

gulp.task("minJs", function (cb) {
    pump([
        gulp.src('./src/js/*.js'),
        uglify(),
        gulp.dest("./dist/js")
    ], cb);
})