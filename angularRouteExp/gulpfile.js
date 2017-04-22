//gulp核心文件
var gulp = require("gulp");
//gulp压缩js的模块
var uglify = require("gulp-uglify");
var concat = require("gulp-concat");

gulp.task("minify", function() {
	//导入
	return gulp.src(['js/base/base.js', 'js/controllerJS/*.js', 'js/directiveJS/*.js', 'js/filterJS/*.js', 'js/routerJS/*.js', 'js/serviceJS/*.js', 'js/base/bootstrap.js'])
		//合并
		.pipe(concat("main.js"))
		//压缩
		.pipe(uglify())
		//导出
		.pipe(gulp.dest('dist/js'))
})
//监听js的改变
gulp.watch("js/*/*.js", ["minify"])
gulp.task("default", ["minify"])