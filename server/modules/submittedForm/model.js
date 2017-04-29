'use strict';

const schema = require('./schema');

class SubmittedFormModel {
  constructor () {
    this.collectionName = 'submittedForms';
    this.name           = 'submittedForm';
    this.namePlural     = 'submittedForms';
    this.title          = 'Submitted Form';
    this.titlePlural    = 'Submitted Forms';
    this.schema         = schema;
  }
};

SubmittedFormModel.factory = () => {
  return new SubmittedFormModel();
}

module.exports = SubmittedFormModel;
