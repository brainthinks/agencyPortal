'use strict';

const ObjectID = require('bson').ObjectID;

module.exports = {
  toMongoId: (id) => ObjectID.createFromHexString(id),
};
