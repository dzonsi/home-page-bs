var gulp = require('gulp'),
    autoprefixer = require('gulp-autoprefixer'),
    cleanCSS = require('gulp-clean-css'),
    rename = require('gulp-rename'),
    minify = require('gulp-minify'),
    sass = require('gulp-sass'),
    imagemin = require('gulp-imagemin'),
    browserSync = require('browser-sync').create();

function css() {
  return gulp.src('./src/sass/style.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(autoprefixer())
    .pipe(cleanCSS({compatibility: 'ie8'}))
    .pipe(rename(function(path) {
      path.extname = ".min.css";
    }))
    .pipe(gulp.dest('./public/css/'))
    .pipe(browserSync.stream());
}

function html() {
  return gulp.src('./*.html')
    .pipe(gulp.dest('./public/'));
}

function serve() {
	browserSync.init({
		server: {
			baseDir: './'
		}
	})
}

function js() {
    return gulp.src('./src/js/*.js')
        .pipe(minify({
            ext: {
                min: '.min.js'
            }
        }))
        .pipe(gulp.dest('./public/js/'))
        .pipe(browserSync.stream());
}
function images() {
    return gulp.src('./src/images/*.{png,jpg,jpeg}')
      .pipe(imagemin())
      .pipe(gulp.dest('./public/images/'));
}
function icons() {
    return gulp.src('./src/icons/*.svg')
      .pipe(gulp.dest('./public/icons/'));
}

gulp.watch('./src/sass/*.scss', css);
gulp.watch('./src/js/*.js', js);
gulp.watch('./src/images/*.{png,jpg,jpeg}', images);
gulp.watch('./src/icons/*.svg', icons);
gulp.watch('./*.html', html).on('change', browserSync.reload);

exports.default = gulp.parallel(html, css, js, images, icons, serve);