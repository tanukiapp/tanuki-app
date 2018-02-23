const gulp = require('gulp')
const babel = require('gulp-babel')
const concat = require('gulp-concat')
const uglify = require('gulp-uglify')
const sass = require('gulp-sass')
const rename = require('gulp-rename')
const htmlmin = require('gulp-htmlmin')

// Build JS
gulp.task('build', () =>
    gulp.src(['src/controllers/*.js', 'src/directives/*.js', 'src/services/*.js', 'src/app.js', 'src/locales/*.js'])
        .pipe(babel({
            presets: ['es2015']
        }))
        .pipe(concat('app.js'))
        .pipe(uglify())
        .pipe(rename({suffix: '.min'}))
        .pipe(gulp.dest('./app/'))
)
 
// Build styles
gulp.task('sass', () => {
    gulp.src('node_modules/bulma/css/bulma.css')
        .pipe(gulp.dest('app/css'))

    gulp.src('src/sass/*.sass')
        .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
        .pipe(rename({suffix: '.min'}))
        .pipe(gulp.dest('app/css'))
})

// Minify views
gulp.task('html', () =>
    gulp.src('src/views/**/*.html')
        .pipe(htmlmin({collapseWhitespace: true}))
        .pipe(gulp.dest('app/views'))
)

// Move files
gulp.task('copy', () => {
    gulp.src('src/index.min.html')
        .pipe(htmlmin({collapseWhitespace: true}))
        .pipe(rename('index.html'))
        .pipe(gulp.dest('app'))
    
    gulp.src(['src/favicon.ico'])
        .pipe(gulp.dest('app'))

    gulp.src(['src/assets/**'])
        .pipe(gulp.dest('app/assets'))
})

gulp.task('bundle', () => {
    let modules = [
        'node_modules/angular/angular.js',
        'node_modules/angular-ui-router/release/angular-ui-router.js',
        'node_modules/angular-translate/dist/angular-translate.js',
        'node_modules/angular-spinner/dist/angular-spinner.js'
    ]

    gulp.src(modules)
        .pipe(concat('bundle.js'))
        .pipe(uglify())
        .pipe(rename({suffix: '.min'}))
        .pipe(gulp.dest('./app/'))
})


gulp.task('default', ['build', 'bundle', 'html', 'sass', 'copy'], () => {})

gulp.task('start', ['bundle'], () => {})