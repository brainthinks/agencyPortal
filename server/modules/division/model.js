'use strict';

const schema = require('./schema');

class DivisionModel {
  constructor () {
    this.collectionName = 'divisions';
    this.name           = 'division';
    this.namePlural     = 'divisions';
    this.title          = 'Division';
    this.titlePlural    = 'Divisions';
    this.schema         = schema;
  }
};

DivisionModel.factory = () => {
  return new DivisionModel();
}

module.exports = DivisionModel;
