'use strict';

const schema = require('./schema');

class ApprovalPathModel {
  constructor () {
    this.collectionName = 'approvalPaths';
    this.name           = 'approvalPath';
    this.namePlural     = 'approvalPaths';
    this.title          = 'Approval Path';
    this.titlePlural    = 'Approval Paths';
    this.schema         = schema;
  }
};

ApprovalPathModel.factory = () => {
  return new ApprovalPathModel();
}

module.exports = ApprovalPathModel;
