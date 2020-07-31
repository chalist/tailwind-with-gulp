const { watch, series, task, parallel, src, dest } = require("gulp");
const rename = require("gulp-rename");
const sass = require("gulp-sass");
const cleanCSS = require("gulp-clean-css");
const postcss = require("gulp-postcss");
const browserSync = require("browser-sync");

exports.tailwind = function () {
    return src("css/tailwind.css")
        .pipe(postcss([require("tailwindcss"), require("autoprefixer")]))
        .pipe(dest("build/"))
        .pipe(browserSync.stream());
};

exports.css = function (cb) {
    return src([`build/*.css`, `!build/*.min.css`])
        .pipe(cleanCSS())
        .pipe(rename({ extname: ".min.css" }))
        .pipe(dest(`build/`))
        .pipe(browserSync.stream());
};

exports.default = function () {
    browserSync.init({
        server: {
            baseDir: "./",
        },
    });

    watch(["css/tailwind.css"], series(exports.tailwind, exports.css));
    watch("index.html").on("change", browserSync.reload);
    //   watch([`build/*.css`, `!build/*.min.css`], exports.css);
};
