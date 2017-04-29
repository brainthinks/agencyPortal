'use strict';

const middleware = require('./middleware').factory();

module.exports = [
  {
    method: 'post',
    description: 'Create an entry',
    path: 'entry',
  },
  {
    method: 'patch',
    description: 'Update an entry',
    path: 'entry',
  },
  {
    method: 'put',
    description: 'Overwrite an entry',
    path: 'entry',
  },
  {
    method: 'get',
    description: 'Get all entries in the system',
    path: 'entry',
    handler: middleware.get,
  },
  {
    method: 'get',
    description: 'Get an entry by ID',
    path: 'entry/:id',
    handler: middleware.getById,
  },
];
