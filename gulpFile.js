'use strict';

/* eslint no-sync: 0 */

const fs = require('fs');
const del = require('del');
const path = require('path');

const gulp = require('gulp');
const $ = require('gulp-load-plugins')({ lazy: true });
const runSequence = require('run-sequence');

const webpack = require('webpack');
const WebpackDevServer = require('webpack-dev-server');
const webpackConfig = require('./webpack.config');

const config = require('./gulpConfig');

gulp.task('build-clean', () => {
  return del(['./build']);
});

gulp.task('build-prepare', () => {
  fs.mkdirSync('./build');
  return gulp.src(['./client/**/*']).pipe(gulp.dest('./build'));
});

gulp.task('build-remove-src', () => {
  return del(['./build/js/']);
});

gulp.task('sass-dev', () => {
  const autoPrefixerOpts = {
    browsers: ['last 2 versions'],
    cascade : false,
  };

  return gulp.src(config.scss.main)
    .pipe($.plumber())
    .pipe($.sassBulkImport().on('error', $.sass.logError))
    .pipe($.sass().on('error', $.sass.logError))
    .pipe($.concat('main.css'))
    .pipe($.autoprefixer(autoPrefixerOpts))
    .pipe(gulp.dest('./build/css'));
});

gulp.task('sass-dev-watch', () => {
  gulp.watch(config.watch.scss, ['sass-dev']);
});

gulp.task('webpack-dev-server', () => {
  const compiler = webpack(webpackConfig);
  const server = new WebpackDevServer(compiler, {
    contentBase: "build/",
    proxy: {
      "/api/*": "http://localhost:3000",
    },
  });

  compiler.plugin('done', function() {
    server.listen(8080, "localhost", function() {
      console.log('listening on 8080');
    });
  });
})

gulp.task('build-dev', (done) => {
  runSequence(
    'build-clean',
    'build-prepare',
    'build-remove-src',
    'sass-dev',
    'sass-dev-watch',
    'webpack-dev-server',
    done
  );
});
