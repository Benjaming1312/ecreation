var gulp = require('gulp'), //gulp主程式
    fs = require('fs')
    browserify = require('browserify') // complier es6
    babelify = require('babelify') // complier es6
    source = require('vinyl-source-stream')
    babel = require('gulp-babel') // es6
    gulpUglify = require('gulp-uglify'), //最小化JS
    sass = require('gulp-sass') //sass
    autoprefixer = require('gulp-autoprefixer') //autoprefixer
    sourceMap = require('gulp-sourcemaps') //sourcemaps
    concat = require('gulp-concat') //合併js
    gulpImagemin = require('gulp-imagemin') //img min
    pug = require('gulp-pug') //pug
    compass = require('gulp-compass') //compass
    gulpLivereload = require('gulp-livereload') //livereload
    connect = require('gulp-connect') //connect

// 監看JS
gulp.task('watch',function(){
    gulp.watch('gulp/**/**',['scripts','styles','views']) //(‘原始路徑’,['執行的名稱']) **代表路徑的所有檔案轉換
})

//connect hotreload
gulp.task('connect',function(){
    connect.server({
        name: "dist server",
        root: './',
        port: 8001,
        livereload: true
    })
})

gulp.task('default',['watch','connect']) //gulp 直接執行


// 執行轉換JS
// gulp.task('scripts',function(){
//     return browserify(['gulp/js/userjs.js'])
//         .transform(babelify)
//         .bundle()
//         // .pipe(fs.createWriteStream("dist/js/bundle.js"))
//         .pipe(source('bundle.js'))
//         // .pipe(gulpUglify()) //最小化JS
//         .pipe(gulp.dest('dist/js')) //輸出路徑
//         .pipe(connect.reload())
// })
gulp.task('scripts',function(){
    gulp.src('gulp/js/*.js') //輸入路徑 **代表路徑的所有檔案轉換
        .pipe(babel({
            presets: ['es2015']
        }))
        .pipe(concat('userjs.js')) //合併所有JS產出為userjs.js
        .pipe(gulpUglify()) //最小化JS
        .pipe(gulp.dest('dist/js')) //輸出路徑
        .pipe(connect.reload())
})

// // // 轉換sass
gulp.task('styles',function(){
    gulp.src('gulp/sass/usercss.sass') //轉換的檔案
        .pipe(sourceMap.init()) //sourcemap
        .pipe(sass({outputStyle: 'compressed',errLogToConsole: true}).on('error',sass.logError)) //編譯
        .pipe(autoprefixer("last 1 version"," > 1%" , "ie 8", "ie 7")
            ) //autoPrefix
        .pipe(sourceMap.write('.',{
            includeContent: false,
            sourceRoot: 'gulp/sass'
        })) //sourceMap寫入在一樣的地方  
        .pipe(gulp.dest('dist/css')) //翻譯後的路徑
        .pipe(connect.reload())
})

//圖片壓縮
gulp.task('image',function(){
    gulp.src('gulp/img/compress/**')
        .pipe(gulpImagemin())
        .pipe(gulp.dest('dist/images'))
})

//pug 轉html
gulp.task('views',function(){
    gulp.src('gulp/html/page/**.pug')
        .pipe(pug({pretty: true}))
        .pipe(gulp.dest('./'))
        .pipe(connect.reload())
})

