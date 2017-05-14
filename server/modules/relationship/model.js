'use strict';

const schema = require('./schema');

class RelationshipModel {
  constructor () {
    this.collectionName = 'relationships';
    this.name           = 'relationship';
    this.namePlural     = 'relationships';
    this.title          = 'Relationship';
    this.titlePlural    = 'Relationships';
    this.schema         = schema;
  }
};

RelationshipModel.factory = () => {
  return new RelationshipModel();
}

module.exports = RelationshipModel;
