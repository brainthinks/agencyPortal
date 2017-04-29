'use strict';

const schema = require('./schema');

module.exports = class DivisionModel {
  static collectionName = 'divisions';
  static name           = 'division';
  static namePlural     = 'divisions';
  static title          = 'Division';
  static titlePlural    = 'Divisions';
  static schema         = schema;

  constructor () {
    Object.assign(this, DivisionModel);
  }
};
