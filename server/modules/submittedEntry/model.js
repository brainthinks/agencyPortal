'use strict';

const schema = require('./schema');

class SubmittedEntryModel {
  constructor () {
    this.collectionName = 'submittedEntries';
    this.name           = 'submittedEntry';
    this.namePlural     = 'submittedEntries';
    this.title          = 'Submitted Entry';
    this.titlePlural    = 'Submitted Entries';
    this.schema         = schema;
  }
};

SubmittedEntryModel.factory = () => {
  return new SubmittedEntryModel();
}

module.exports = SubmittedEntryModel;
