'use strict';

const ObjectID = require('bson').ObjectID;

function toMongoId (id) {
  if (Array.isArray(id)) {
    return id.map(toMongoId);
  }

  if (typeof id !== 'string' || id === 'undefined') {
    return id;
  }

  return ObjectID.createFromHexString(id);
}

module.exports = {
  toMongoId,
};
