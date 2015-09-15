const gulp = require('gulp');
const ts = require('gulp-typescript');

const paths = {
  src: ['src/typings/**/*.d.ts', 'typings/**/*.d.ts', 'src/app/**/*.tsx', 'src/app/**/*.ts'],
  html: 'src/**/*.html',
  config: 'src/config.js',
  app: 'lib/app',
  lib: 'lib'
};

const project = ts.createProject({
  typescript: require('typescript'),
  noExternalResolve: true,
  jsx: 'react',
  module: 'system'
});

gulp.task('ts', () =>
  gulp.src(paths.src)
    .pipe(ts(project))
    .pipe(gulp.dest(paths.app)));

gulp.task('copy', () =>
  gulp.src([paths.html, paths.config])
    .pipe(gulp.dest(paths.lib)));

gulp.task('watch', ['ts', 'copy'], () => {
  gulp.watch(paths.src, ['ts']);
  gulp.watch([paths.html, paths.config], ['copy']);
});

gulp.task('default', ['watch']);

gulp.task('build', ['ts', 'copy']);
