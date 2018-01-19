const gulp = require('gulp')
const babel = require('gulp-babel')
const sass = require('gulp-sass')
const rename = require('gulp-rename')
const htmlmin = require('gulp-htmlmin')

// Babel ES2015
gulp.task('babel', () =>
    gulp.src('app/src/**/*.js')
        .pipe(babel({
            presets: ['es2015']
        }))
        .pipe(gulp.dest('app/dist'))
)
 
// Build styles
gulp.task('sass', () => {
    gulp.src('app/src/sass/*.scss')
        .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
        .pipe(rename({suffix: '.min'}))
        .pipe(gulp.dest('app/dist/css'))
})

// Minify views
gulp.task('html', () => {
    gulp.src('app/src/views/*.html')
        .pipe(htmlmin({collapseWhitespace: true}))
        .pipe(gulp.dest('app/dist/views'))
})

// Move files
gulp.task('copy', () => {
    gulp.src('app/src/index.html')
        .pipe(htmlmin({collapseWhitespace: true}))
        .pipe(gulp.dest('app/dist'))
    
    gulp.src(['app/src/favicon.ico'])
        .pipe(gulp.dest('app/dist'))

    gulp.src([
        'app/lib/angular/angular.min.js',
        'app/lib/angular-ui-router/release/angular-ui-router.min.js'
    ]).pipe(gulp.dest('app/dist/lib'))
})

gulp.task('default', ['babel', 'sass', 'html', 'copy'], () => {})