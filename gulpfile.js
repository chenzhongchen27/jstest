var gulp=require('gulp'),
	livereload=require('gulp-livereload'),
	less=require('gulp-less');
gulp.task('watch',function(){
	livereload.listen();
	gulp.watch(['*.html','less/*.less','scripts/*.js','*.html'],['less',function(){
		livereload.reload('*.html');
	}]);
});
gulp.task('less',function(){
	gulp.src('less/*.less')
	.pipe(less())
	.pipe(gulp.dest('css'))
	.pipe(livereload());
});
/*gulp.task('phprefresh',function(){
	gulp.src('*.php')
	.pipe(livereload());
})*/