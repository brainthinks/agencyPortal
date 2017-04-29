'use strict';

const schema = require('./schema');

class FormModel {
  constructor () {
    this.collectionName = 'forms';
    this.name           = 'form';
    this.namePlural     = 'forms';
    this.title          = 'Form';
    this.titlePlural    = 'Forms';
    this.schema         = schema;
  }
};

FormModel.factory = () => {
  return new FormModel();
}

module.exports = FormModel;
