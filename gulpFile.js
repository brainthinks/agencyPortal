'use strict';

/* eslint no-sync: 0 */

const fs = require('fs');
const del = require('del');
const path = require('path');

const webpack = require('webpack');
const WebpackDevServer = require('webpack-dev-server');

const gulp = require('gulp');
const $ = require('gulp-load-plugins')({ lazy: true });
const runSequence = require('run-sequence');

const config = require('./gulpConfig');

const webpackConfigDev = require('./webpack.config.dev');

gulp.task('build-clean', () => {
  return del(['build']);
});

gulp.task('build-dirs', () => {
  for (let i = 0; i < config.buildDirectories.length; i++) {
    const dir = config.buildDirectories[i];

    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir);
    }
  }
});

gulp.task('sass-dev', () => {
  const autoPrefixerOpts = {
    browsers: ['last 2 versions'],
    cascade : false,
  };

  gulp.src(config.scss.main)
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

gulp.task('build-dev', (done) => {
  runSequence(
    'build-clean',
    'build-dirs',
    'sass-dev',
    'sass-dev-watch',
    done
  );
});
