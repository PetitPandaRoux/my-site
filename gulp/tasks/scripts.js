var gulp=require('gulp');
var webpack=require('webpack');

gulp.task('scripts',['modernizr'], function (callback){
    webpack(require('../../webpack.config.js'),function(){
        console.log("Hoora!");
        callback();
    });

});
