var gulp = require("gulp");
var babel = require("gulp-babel");
var browserify = require("gulp-browserify");
var react = require('gulp-react');
var jsx = require('gulp-jsx');
var watch = require("gulp-watch");
var sourcemaps = require("gulp-sourcemaps");
var concat = require("gulp-concat");

gulp.task("jsx", function () {
  var gulp = require('gulp');
  var sourcemaps = require('gulp-sourcemaps');
  var react = require('gulp-react');

  gulp.src('jsx/*.jsx')
    .pipe(react())
    .pipe(gulp.dest('src'));
});

gulp.task("default", function () {

  gulp.run("jsx");

  return gulp.src("src/**/*")
    .pipe(sourcemaps.init())
    .pipe(babel())

    .pipe(browserify())
    .pipe(concat("all.js"))
    .pipe(sourcemaps.write("."))
    .pipe(gulp.dest("dist"));
});

gulp.task("watch", function(){
  watch('src/**/*.js', function () {
    gulp.run("default");
  });
})


