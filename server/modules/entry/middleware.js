'use strict';

const ObjectID = require('bson').ObjectID;

const Model = require('./model').factory();

function collection (req) {
  return req.db.collection(Model.collectionName);
}

class EntryServices {
  get (req, res, next) {
    return collection(req).find().toArray()
      .then((records) => {
        res.status(200).send(records);
      })
      .catch(next);
  }

  getById (req, res, next) {
    const id = req.params.id;

    const mongoId = ObjectID.createFromHexString(id);

    return collection(req).findOne({ _id: mongoId })
      .then((record) => {
        res.status(200).send(record);
      })
      .catch(next);
  }

  create (req, res, next) {

  }

  update (req, res, next) {

  }

  overwrite (req, res, next) {

  }

  delete (req, res, next) {

  }
};

EntryServices.factory = () => {
  return new EntryServices();
};

module.exports = EntryServices;
