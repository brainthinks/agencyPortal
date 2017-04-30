'use strict';

const bodyParser = require('body-parser');

function attachDb (db) {
  return (req, res, next) => {
    req.db = db;
    next();
  };
}

function handleError () {
  return (err, req, res, next) => {
    console.log('ERROR');
    console.log('Ended up in error middleware!!!!');
    console.log(err);
    res.status(500).send('Error');
  };
}

module.exports = (config, db) => [
  attachDb(db),
  bodyParser.urlencoded({
    extended: true,
    limit: config.bodySizeLimit,
  }),
  bodyParser.json({
    limit: config.bodySizeLimit,
  }),
  handleError(),
];
