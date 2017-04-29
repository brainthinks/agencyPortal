'use strict';

const schema = require('./schema');

module.exports = class ApprovalPathModel {
  static collectionName = 'approvalPaths';
  static name           = 'approvalPath';
  static namePlural     = 'approvalPaths';
  static title          = 'Approval Path';
  static titlePlural    = 'Approval Paths';
  static schema         = schema;

  constructor () {
    Object.assign(this, ApprovalPathModel);
  }
};
