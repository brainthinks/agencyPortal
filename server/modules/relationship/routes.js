'use strict';

const middleware = require('./middleware').factory();

module.exports = [
  {
    method: 'post',
    description: 'Create a relationship',
    path: 'relationship',
    handler: middleware.create,
  },
  {
    method: 'patch',
    description: 'Update a relationship',
    path: 'relationship/:id',
  },
  {
    method: 'put',
    description: 'Overwrite a relationship',
    path: 'relationship/:id',
    handler: middleware.overwrite,
  },
  {
    method: 'delete',
    description: 'Delete a relationship',
    path: 'relationship/:id',
    handler: middleware.delete,
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
