'use strict';

const ObjectID = require('bson').ObjectID;

module.exports = {
  toMongoId: (id) => {
    if (typeof id !== 'string' || id === 'undefined') {
      return id;
    }

    return ObjectID.createFromHexString(id);
  },
};
