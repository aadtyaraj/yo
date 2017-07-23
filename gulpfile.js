var gulp= require('gulp'),
      pump= require('pump'),
      sass= require('gulp-ruby-sass'),
      pug= require('gulp-pug'),
      browserSync= require('browser-sync');

// =====================
// SASS
// =====================

gulp.task('style', function(cb){
  pump([
    sass('app/scss/style.scss'), gulp.dest ('app/css'),browserSync.reload({stream:true})
  ],cb);
});

// ====================
// PUG to HTML
// ====================
gulp.task('content',function(cb){
  pump([
    gulp.src('app/pug/index.pug'), pug(), gulp.dest('app'),browserSync.reload({stream:true})
  ],cb);
});


// ================
// BROWSER SYNC
// ================

gulp.task('browserSync',function (){
  browserSync.init({
    server:{
      baseDir: 'app'
    }
  });
});


// GULP default

gulp.task('default', ['browserSync','style','content'], function(){
  gulp.watch('app/scss/style.scss',['style']);
  gulp.watch('app/pug/index.pug',['content']);
  gulp.watch('app/css/style.css', browserSync.reload);
  gulp.watch('app/index.html', browserSync.reload);
  gulp.watch('app/js/script.js', browserSync,reload);
});
