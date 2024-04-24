//导入工具包 require('node_modules里对应模块')
var gulp = require('gulp'); //本地安装gulp所用到的地方=
var px2rem = require('gulp-px2rem-plugin');
//定义一个testLess任务（自定义任务名称）
gulp.task('testCss', function () {
    gulp.src('*.css') //该任务针对的文件
        .pipe(px2rem({ 'width_design': 750, 'valid_num': 6, 'pieces': 10 })) //该任务调用的模块
        .pipe(gulp.dest('src/css')); //将会在src/css下生成index.css
});
// gulp.task('default', function () {
//     gulp.src('*.css')
//         .pipe(px2rem({ 'width_design': 750, 'valid_num': 6, 'pieces': 10 }));
// });
gulp.task('default', ['testCss', 'elseTask']); //定义默认任务

//gulp.task(name[, deps], fn) 定义任务  name：任务名称 deps：依赖任务名称 fn：回调函数
//gulp.src(globs[, options]) 执行任务处理的文件  globs：处理的文件路径(字符串或者字符串数组)
//gulp.dest(path[, options]) 处理完后文件生成路径