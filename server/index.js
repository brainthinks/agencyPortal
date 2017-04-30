'use strict';

const MongoClient = require('mongodb').MongoClient;
const express = require('express');

const config = require('./config');

const app = express();

function registerMiddleware (middleware, app) {
  const numMiddleware = middleware.length;

  for (let i = 0; i < numMiddleware; i++) {
    app.use(middleware[i]);
  }
}

const mongoUrl = `mongodb://${config.db.host}/${config.db.name}`;

MongoClient.connect(mongoUrl)
  .then((db) => {
    console.info('Connected to database.');

    const middleware = require('./middleware')(config, db);
    const routes = require('./routes')(app, config, db);
    const errorMiddleware = middleware.pop();

    registerMiddleware(middleware, app);

    routes.registerAll();

    app.use(errorMiddleware);

    app.listen(3000, function () {
      console.log('Example app listening on port 3000!');
    });
  })
  .catch((err) => {
    console.log('Error while connecting to the database!');
    console.log(err);
    // @todo - log the error to a file
  });
