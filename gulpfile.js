const gulp = require('gulp');
const webp = require('gulp-webp');
const sass = require('gulp-sass')(require('sass'));

gulp.task('sass', function() {
  return gulp.src('./src/sass/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./dist/css'));
  }
);

gulp.task('image', () =>
  gulp.src('./src/assets/images/*.*')
    .pipe(webp())
    .pipe(gulp.dest('dist/img'))
);

gulp.task('watch', function () {
  gulp.watch('./src/sass/**/*.scss', gulp.series('sass','image'));
})