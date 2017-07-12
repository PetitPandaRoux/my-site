 var gulp = require ("gulp");
var postCSS=require('gulp-postcss');
var cssVariable=require('postcss-simple-vars');
var nested=require('postcss-nested');
var cssImport=require('postcss-import');
var autoprefixer=require('autoprefixer');
var mixins=require('postcss-mixins');

gulp.task('styles', function(){
	return gulp.src('./app/assets/styles/styles.css')
	.pipe(postCSS([cssImport,mixins,cssVariable,nested,autoprefixer]))
    .on('error', function(errorInfo){
        console.log(errorInfo.toString());
        this.emit('end');
    })
    .pipe(gulp.dest('./app/temp/styles'));

});
