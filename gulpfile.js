let gulp = require('gulp'),
uglify = require('gulp-uglify');

gulp.task('buildjs',()=>{
	gulp.src('source/*.js')
	.pipe(uglify())
	.pipe(gulp.dest("dist"));
});