var gulp = require('gulp'),
	concatCss = require('gulp-concat-css'),
	cleanCSS = require('gulp-clean-css'),
	rename = require ('gulp-rename'),
	livereload = require('gulp-livereload'),
	connect = require('gulp-connect');
const image = require('gulp-image');

gulp.task('connect', function() {
  connect.server({
    root: '',
    livereload: true
  });
});

gulp.task('css', function () {
	return gulp.src('./stylesheets/*.css')
		.pipe(concatCss("bundle.css"))
		.pipe(cleanCSS())
		.pipe(rename("bundle.min.css"))
		.pipe(gulp.dest('./stylesheets/concat/'))
		.pipe(connect.reload());
});

gulp.task('html', function(){
	gulp.src('./index.html')
	.pipe(connect.reload());
});

gulp.task('watch', function() {
	gulp.watch('./stylesheets/*.css', ['css'])
	gulp.watch('./index.html', ['html']);
});

gulp.task('image', function () {
  gulp.src('./image/*')
    .pipe(image())
    .pipe(gulp.dest('./image/optim/'));
});

gulp.task('start', ['connect', 'html', 'css', 'watch']);

gulp.task('imageoptim', ['image']);