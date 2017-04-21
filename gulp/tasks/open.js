'use strict';

var gulp = require('gulp');
var open = require('gulp-open');

gulp.task('open', function(){
	gulp.src('app/index.html')
		.pipe(open());
});
