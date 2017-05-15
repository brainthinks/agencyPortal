'use strict';

const ObjectID = require('bson').ObjectID;
const keyBy = require('lodash/keyBy');

const utils = require('../../utils');

const Model = require('./model').factory();

function collection (req) {
  return req.db.collection(Model.collectionName);
}

class RelationshipServices {
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
    const record = req.body;

    return collection(req).insertOne(record)
      .then(() => {
        res.status(200).send(record);
      })
      .catch(next);
 }

  update (req, res, next) {
    throw new Error('Still need to define "update"...');
  }

  overwrite (req, res, next) {
    const id = req.params.id;
    const record = req.body;

    delete record._id;

    return collection(req).findOneAndUpdate({ _id: utils.toMongoId(id) }, record)
      .then(() => collection(req).findOne({ _id: utils.toMongoId(id) }))
      .then((updatedRecord) => {
        res.status(200).send(updatedRecord);
      })
      .catch(next);
  }

  delete (req, res, next) {
    const id = req.params.id;

    console.log(id)

    return collection(req).findOneAndDelete({ _id: utils.toMongoId(id) })
      .then(({ value }) => {
        res.status(200).send(value);
      })
      .catch(next);
  }
};

RelationshipServices.factory = () => {
  return new RelationshipServices();
};

module.exports = RelationshipServices;
