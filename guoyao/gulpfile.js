//引入gulp模块
var gulp = require('gulp');
//引入gulp-js代码压缩模块
var uglify = require('gulp-uglify');
//引入gulp-js代码合并模块
var concat = require('gulp-concat');
//引入gulp-css代码压缩模块
var cssnano = require('gulp-cssnano');
//引入gulp-图片压缩模块 联网 
var imagemin = require('gulp-smushit');
//引入gulp-图片压缩模块 不联网 更好
var imagemini = require('gulp-imagemin');
//引入gulp-html代码压缩模块
var htmlmin = require('gulp-htmlmin');
//引入浏览器同步插件
var browserSync = require('browser-sync');
//引入无刷新插件
//var webserver = require('gulp-webserver');

var less = require('gulp-less');

//执行一个任务
//gulp.task('default',function(){
//	//将你默认的任务代码放在这
//	console.log('第一个任务，任务名字是default');
//});

//js压缩
/*gulp.task('js',function(){
//	第一步:去读取我将要压缩的代码
	gulp.src('src/app/scripts/*.js')
//	第二步:将读取到的js代码进行压缩
	.pipe(uglify({preserveComments:'some'}))
//	第三步:将压缩过的js代码保存到哪个文件夹中
	.pipe(gulp.dest('dist/src/app/scripts'))
});*/

//js合并压缩
gulp.task('jscon',function(){
//	第一步:去读取我将要压缩的代码
	gulp.src('src/app/scripts/*.js')
//	第二步:将读取到的js代码进行压缩
//	.pipe(concat('all.js'))
	.pipe(uglify({preserveComments:'some'}))
//	第三步:将压缩过的js代码保存到哪个文件夹中
	.pipe(gulp.dest('dist/src/app/scripts'))
	.pipe(browserSync.reload({
      stream: true
    }));
});

gulp.task('jscon2',function(){
	gulp.src('src/app/scripts/lib/*.js')
	.pipe(uglify({preserveComments:'some'}))
	.pipe(gulp.dest('dist/src/app/scripts/lib'))
	.pipe(browserSync.reload({
      stream: true
    }));
});


//css压缩
gulp.task('style',function(){
	gulp.src('src/app/styles/*.less')
	.pipe(less())
	.pipe(cssnano())
	.pipe(gulp.dest('dist/src/app/styles'))
	.pipe(browserSync.reload({
      stream: true
    }));
});

//图片压缩 联网
//gulp.task('images',function(){
//	gulp.src('src/app/images/*.{jpg,png,gif}')
//	.pipe(imagemin({verbose:true}))
//	.pipe(gulp.dest('dist/src/app/images'))
//	
//});

//图片压缩 不联网
gulp.task('imagesi',function(){
	return gulp.src('src/app/images/*.{png,jpg,gif}')
	.pipe(imagemini({progressive:true}))
	.pipe(gulp.dest('dist/src/app/images'));
	
});

//html压缩
gulp.task('html',function(){
	var options = {
		removeComments : true,//清除HTML注释
		collapseWhitespace : true,//压缩HTML
		collapseBolleanAttributes : true,//省略布尔属性值 <input check="true">
		removeEmptyArributes : true,//删除所有空格作属性值
		removeScriptTypeAttributes : true,
		removeStyleLinkTypeAttributes : true,
		minifyJS : true,
		minifyCSS : true,
	}
	gulp.src('src/app/*.html')
	.pipe(htmlmin(options))
	.pipe(gulp.dest('dist/src/app'))
	.pipe(browserSync.reload({
      stream: true
    }));
});


gulp.task('servers',function(){
	browserSync({
		server:{baseDir:['dist/src/app']}
	},function(err,bs){
		console.log(bs.options.getIn(["urls","local"]));
	});
	
	//如果index.html发生改变时，去执行html文件(压缩过的)
	gulp.watch('src/app/index.html',['html']);
	gulp.watch('src/app/styles/*.less',['style']);
	gulp.watch('src/app/scripts/*.js',['jscon']);
	gulp.watch('src/app/scripts/lib/*.js',['jscon2']);
});



//设置一个主任务来执行多个子任务
gulp.task('mainTask',['html','jscon','jscon2','style','imagesi','servers']);

