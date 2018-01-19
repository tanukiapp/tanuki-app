const gulp = require('gulp')
const babel = require('gulp-babel')
const sass = require('gulp-sass')
const rename = require('gulp-rename')
const htmlmin = require('gulp-htmlmin')

// Babel ES2015
gulp.task('babel', () =>
    gulp.src('src/**/*.js')
        .pipe(babel({
            presets: ['es2015']
        }))
        .pipe(gulp.dest('dist'))
)
 
// Build styles
gulp.task('sass', () => {
    gulp.src('src/sass/*.scss')
        .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
        .pipe(rename({suffix: '.min'}))
        .pipe(gulp.dest('dist/css'))
})

// Minify views
gulp.task('html', () => {
    gulp.src('src/views/*.html')
        .pipe(htmlmin({collapseWhitespace: true}))
        .pipe(gulp.dest('dist/views'))
})

// Move files
gulp.task('copy', () => {
    gulp.src('src/index.html')
        .pipe(htmlmin({collapseWhitespace: true}))
        .pipe(gulp.dest('dist'))
    
    gulp.src(['src/favicon.ico'])
        .pipe(gulp.dest('dist'))

    gulp.src('lib/**/*').pipe(gulp.dest('dist/lib'))
})

gulp.task('default', ['babel', 'sass', 'html', 'copy'], () => {})