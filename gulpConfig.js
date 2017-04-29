'use strict';

const path = require('path');

const clientPath = (target) => path.join(__dirname, './client', target);
const buildPath = (target) => path.join(__dirname, './build', target);

module.exports = {
  frontEndFiles: clientPath('js/**.js'),
  assets       : [
    clientPath('assets/**'),
    clientPath('img/**'),
  ],
  topLevelAssets: [
    clientPath('/topLevelAssets/*'),
  ],
  dest               : {
    images: buildPath('images'),
    css: buildPath('css'),
  },
  buildDirectories: [
    buildPath(''),
    buildPath('assets'),
    buildPath('css'),
    buildPath('img'),
  ],
  filesToBeBackedUp: [
  ],
  fonts: [
  ],
  scss: {
    main: [
    ],
  },
  watch: {
    scss: [
      clientPath('scss/**/*.scss'),
      clientPath('js/**/*.scss'),
    ],
  },
};
