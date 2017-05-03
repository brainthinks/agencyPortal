'use strict';

const path = require('path');

const clientPath = (target) => path.join(__dirname, './client', target);

module.exports = {
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
