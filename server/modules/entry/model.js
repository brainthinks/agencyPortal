'use strict';

const schema = require('./schema');

class EntryModel {
  constructor () {
    this.collectionName = 'entries';
    this.name           = 'entry';
    this.namePlural     = 'entries';
    this.title          = 'Entry';
    this.titlePlural    = 'Entries';
    this.schema         = schema;
  }
};

EntryModel.factory = () => {
  return new EntryModel();
}

module.exports = EntryModel;
