'use strict';

const middleware = require('./middleware').factory();

module.exports = [
  {
    method: 'post',
    description: 'Create a relationship',
    path: 'relationship',
  },
  {
    method: 'patch',
    description: 'Update a relationship',
    path: 'relationship',
  },
  {
    method: 'put',
    description: 'Overwrite a relationship',
    path: 'relationship',
  },
  {
    method: 'get',
    description: 'Get all relationships in the system',
    path: 'relationship',
    handler: middleware.get,
  },
  {
    method: 'get',
    description: 'Get a relationship by ID',
    path: 'relationship/:id',
    handler: middleware.getById,
  },
];
