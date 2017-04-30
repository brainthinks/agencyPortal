'use strict';

const keyBy = require('lodash/keyBy');

const utils = require('../../utils');

const SubmittedEntryModel = require('../submittedEntry/model').factory();

const Model = require('./model').factory();

function collection (req) {
  return req.db.collection(Model.collectionName);
}

class SubmittedFormServices {
  get (req, res, next) {
    let userId = utils.toMongoId(req.query.userId);
    const { indexById } = req.query;

    if (userId === 'undefined') {
      userId = undefined;
    }

    const query = {};

    if (userId) {
      if (Array.isArray(userId)) {
        query.userId = { $in: userId };
      } else {
        query.userId = userId;
      }
    }

    return collection(req).find(query).toArray()
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

    return collection(req).findOne({ _id: utils.toMongoId(id) })
      .then((record) => {
        res.status(200).send(record);
      })
      .catch(next);
  }

  create (req, res, next) {
    const userId = utils.toMongoId(req.body.userId);
    const formId = utils.toMongoId(req.body.formId);
    const submittedEntries = req.body.submittedEntries;
    const timestamp = Date.now();

    const record = {
      userId,
      formId,
      timestamp,
      approvedPaths: [],
    };

    return collection(req).insertOne(record)
      .then(() => {
        const submittedEntriesRecords = Object.keys(submittedEntries).map((entryId) => {
          return {
            userId,
            submittedFormId: record._id,
            entryId,
            choices: submittedEntries[entryId],
          };
        });

        if (submittedEntriesRecords.length) {
          return req.db.collection(SubmittedEntryModel.collectionName).insertMany(submittedEntriesRecords);
        }
      })
      .then(() => {
        res.status(200).send(record);
      })
      .catch(next);
  }

  update (req, res, next) {

  }

  overwrite (req, res, next) {

  }

  delete (req, res, next) {

  }
};

SubmittedFormServices.factory = () => {
  return new SubmittedFormServices();
};

module.exports = SubmittedFormServices;
