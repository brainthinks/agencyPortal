'use strict';

const ObjectID = require('bson').ObjectID;
const keyBy = require('lodash/keyBy');

const Model = require('./model').factory();

function collection (req) {
  return req.db.collection(Model.collectionName);
}

class FormServices {
  get (req, res, next) {
    const { indexById } = req.query;

    return collection(req).find().toArray()
      .then((records) => {
        if (indexById) {
          records = keyBy(records, '_id');
        }

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

FormServices.factory = () => {
  return new FormServices();
};

module.exports = FormServices;
