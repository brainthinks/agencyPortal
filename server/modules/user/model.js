'use strict';

const schema = require('./schema');

class UserModel {
  constructor () {
    this.collectionName = 'users';
    this.name           = 'user';
    this.namePlural     = 'users';
    this.title          = 'User';
    this.titlePlural    = 'Users';
    this.schema         = schema;
  }
};

UserModel.factory = () => {
  return new UserModel();
}

module.exports = UserModel;
