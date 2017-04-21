'use strict';

var gulp = require('gulp');
var connect = require('gulp-connect');

gulp.task('connect', function () {
	connect.server({
		name: 'Dev App',
		root: ['app'],
		port: 8001,
		livereload: true
	});
});
