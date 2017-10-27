var gulp = require('gulp');
var gutil = require('gulp-util'); //console output of build process ,for debugging
var source = require('vinyl-source-stream'); //Throwing text file from one part of build process from other 
var browserify = require('browserify'); //for figuring out what part of code depends on other part of code
var watchify = require('watchify'); //automatically re run gulp file whenever code changes in source(jsx) file  
var reactify = require('reactify'); //

// var react = require('gulp-react');
// var concat = require('gulp-concat');

gulp.task('default',function(){
	// return gulp.src('src/**')
	// 	.pipe(react())
	// 	.pipe(concat('application.js'))
	// 	.pipe(gulp.dest('./'));
	var bundler = watchify(browserify({
		entries:['./src/app.jsx'],
		transform:[reactify],
		extensions:['.jsx'],
		debug:true,
		cache:{},
		packageCache:{},
		fullPaths:true
	}));
	//look for other peoples build process 
	function build(file){
		if (file) gutil.log('Recompiling '+ file);
		return bundler
			.bundle()
			.on('error',gutil.log.bind(gutil,'Browserify Error'))
			.pipe(source('main.js'))
			.pipe(gulp.dest('./'));
	};
	build();
	bundler.on('update',build)
});