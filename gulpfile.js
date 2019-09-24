const gulp = require('gulp');
const sass = require('gulp-sass');
const browserSync = require('browser-sync');

gulp.task('scss',function () {
  return gulp.src('app/scss/**/*.scss')
    .pipe(sass({outputStyle: 'compressed'}))
    .pipe(gulp.dest('app/css'))
    .pipe(browserSync.reload({stream:true}))
})
gulp.task('html',function() {
  return gulp.src('*.html')
  .pipe(browserSync.reload({stream:true}))

})
gulp.task('JS',function() {
  return gulp.src('app/js/*.js')
  .pipe(browserSync.reload({stream:true}))

})
gulp.task('browser-sync',function() {
  browserSync.init({
    server:{
      baseDir:"index.html"
    }
  })
})
gulp.task('watch', function() {
  gulp.watch('app/scss/**/*.scss',gulp.parallel('scss'))
  gulp.watch('*.html',gulp.parallel('html'))
  gulp.watch('app/js/*.js',gulp.parallel('JS'))

})

gulp.task('default',gulp.parallel('browser-sync', 'watch'))
