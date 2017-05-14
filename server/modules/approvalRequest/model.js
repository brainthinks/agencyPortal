'use strict';

const schema = require('./schema');

class ApprovalModel {
  constructor () {
    this.collectionName = 'approvals';
    this.name           = 'approval';
    this.namePlural     = 'approvals';
    this.title          = 'Approval';
    this.titlePlural    = 'Approvals';
    this.schema         = schema;
  }
};

ApprovalModel.factory = () => {
  return new ApprovalModel();
}

module.exports = ApprovalModel;
