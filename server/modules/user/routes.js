'use strict';

const middleware = require('./middleware').factory();

module.exports = [
  {
    method: 'post',
    description: 'Create a user',
    path: 'user',
  },
  {
    method: 'patch',
    description: 'Update a user',
    path: 'user',
  },
  {
    method: 'put',
    description: 'Overwrite a user',
    path: 'user',
  },
  {
    method: 'get',
    description: 'Get all users in the system',
    path: 'user',
    handler: middleware.get,
  },
  {
    method: 'get',
    description: 'Get a user by ID',
    path: 'user/:id',
    handler: middleware.getById,
  },
];
