'use strict';

var gulp = require('gulp');

gulp.task('watch', function () {
	gulp.watch('app/resources/assets/sass/**/*.scss', ['sass', 'cssmin']);
	gulp.watch('app/resources/assets/js/*.js', ['compress']);
});
