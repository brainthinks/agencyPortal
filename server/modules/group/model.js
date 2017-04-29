'use strict';

const schema = require('./schema');

module.exports = class AgencyModel {
  static collectionName = 'agencies';
  static name           = 'agency';
  static namePlural     = 'agencies';
  static title          = 'Agency';
  static titlePlural    = 'Agencies';
  static schema         = schema;

  constructor () {
    Object.assign(this, AgencyModel);
  }
};
