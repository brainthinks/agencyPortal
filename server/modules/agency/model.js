'use strict';

const schema = require('./schema');

class AgencyModel {
  constructor () {
    this.collectionName = 'agencies';
    this.name           = 'agency';
    this.namePlural     = 'agencies';
    this.title          = 'Agency';
    this.titlePlural    = 'Agencies';
    this.schema         = schema;
  }
};

AgencyModel.factory = () => {
  return new AgencyModel();
}

module.exports = AgencyModel;
