'use strict';

const schema = require('./schema');

class JobRoleModel {
  constructor () {
    this.collectionName = 'jobRoles';
    this.name           = 'jobRole';
    this.namePlural     = 'jobRoles';
    this.title          = 'Job Role';
    this.titlePlural    = 'Job Roles';
    this.schema         = schema;
  }
};

JobRoleModel.factory = () => {
  return new JobRoleModel();
}

module.exports = JobRoleModel;
