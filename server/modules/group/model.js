'use strict';

const schema = require('./schema');

class GroupModel {
  constructor () {
    this.collectionName = 'groups';
    this.name           = 'group';
    this.namePlural     = 'groups';
    this.title          = 'Group';
    this.titlePlural    = 'Gropus';
    this.schema         = schema;
  }
};

GroupModel.factory = () => {
  return new GroupModel();
}

module.exports = GroupModel;
