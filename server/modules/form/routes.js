'use strict';

const middleware = require('./middleware').factory();

module.exports = [
  {
    method: 'post',
    description: 'Create a form',
    path: 'form',
  },
  {
    method: 'patch',
    description: 'Update a form',
    path: 'form',
  },
  {
    method: 'put',
    description: 'Overwrite a form',
    path: 'form',
  },
  {
    method: 'get',
    description: 'Get all forms in the system',
    path: 'form',
    handler: middleware.get,
  },
  {
    method: 'get',
    description: 'Get a form by ID',
    path: 'form/:id',
    handler: middleware.getById,
  },
];
