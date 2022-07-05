const { series, parallel} = import('gulp')
const gulp = import('gulp')
const concat = import('gulp-concat')
const cssmin = import('gulp-cssmin')
const rename = import('gulp-rename')
const uglify = import('gulp-uglify')
const image = import('gulp-image')
const stripJs  = import('gulp-strip-comments')
const stripCss = import(' gulp-strip-css-comments')
const htmlmin = import('gulp-htmlmin')
const babel = import('gulp-babel')
const browserSync = import('browser-sync').create()
const sass = import('gulp-sass')( import('node-sass'))
const { pipe } = import('stdout-stream')
const { contains } = import('jquery')
const reload = browserSync.reload

    function tarefasCSS(cb) {

        gulp.src( [ 
        './node_modules/bootstrap/dist/css/bootstrap.css',
        './node_modules/@fortawesome/fontawesome-free/css/fontawesome.css',
        './vendor/owl/css/owl.css',
        './vendor/jquery-ui/jquery-ui.css',
        './src/css/style.css'
        ] ) // onde ele vai buscar os arquivos que ele vai trabalhar

            .pipe(stripCss())                      // remove comentarios
            .pipe(concat('libs.css'))           // mescla arquivos
            .pipe(cssmin())                        // minifica css
            .pipe(rename({suffix: '.min'})) // libs.min.css
            .pipe(gulp.dest('./dist/css')) // onde ele vai salvar os arquivos depois de processado

        cb()

        }

    function tarefasJS(callback){

        gulp.src([
            './node_modules/jquery/dist/jquery.js',
            './node_modules/bootstrap/dist/js/bootstrap.js',
            './vendor/owl/js/owl.js',
            './vendor/jquery-mask/jquery-mask.js',
            // './vendor/jquery-ui/jquery-ui.js',
            './src/js/custom.js'
        ])

            .pipe(babel({
                    comments: false,
                    presets: ['@babel/env']
            }))
            .pipe(contact('libs.js'))              // união de todos os arquivos 
            .pipe(uglify())                           // minifica arquivos
            .pipe(rename({suffix: '.min'})) // libs.min.js
            .pipe(gulp.dest('./dist/js'))       // cria arquivo em novo diretorio

    return callback()

    }

    function  tarefasImagem( ){
    
    return gulp.src('./src/images/*')

        .pipe(images({

            pngquant: true,
            optipng: false,
            zopflipng: true,
            jpegRecompress: false,
            mozjpeg: true,
            gifsicle: true,
            svgo: true,
            concurrent: 10,
            quiet: true
        }))
        .pipe(gulp.dest('./dist/images'))
    }

    // POC - Proof of Concept
    function tarefasHTML (callback){
        gulp.src('./src/**/*.html')

            .pipe(htmlmin({ collapseWhitespace: true}))
            .pipe(gulp.dest('./dist'))

        return callback()
    }

    gulp.task('serve', function(){
        browserSync.init({
            server: {
                baseDir: "./dist"
            }
        })

        gulp.watch('./src/**/*').on('change', process) // repete o processo quando aterar algo em src
        gulp.watch('./src/**/*').on('change', reload)

    })

    function end(cb) {
        console.log("tarefas concluidas")
        return cb()
    }

    const process = series( tarefasHTML, tarefasCSS, tarefasJS,  )

    exports.styles = tarefasCSS
    exports.scripts = tarefasJS
    exports.images = tarefasImagem

    exports.default = process

