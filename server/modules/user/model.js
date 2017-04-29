'use strict';

const schema = require('./schema');

class AgencyModel {
  constructor () {
    this.collectionName = 'users';
    this.name           = 'user';
    this.namePlural     = 'users';
    this.title          = 'User';
    this.titlePlural    = 'Users';
    this.schema         = schema;
  }
};

AgencyModel.factory = () => {
  return new AgencyModel();
}

module.exports = AgencyModel;
