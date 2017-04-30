'use strict';

const middleware = require('./middleware').factory();

module.exports = [
  {
    method: 'post',
    description: 'Create a submitted form',
    path: 'submittedForm',
    handler: middleware.create,
  },
  {
    method: 'patch',
    description: 'Update a submitted form',
    path: 'submittedForm',
  },
  {
    method: 'put',
    description: 'Overwrite a submitted form',
    path: 'submittedForm',
  },
  {
    method: 'get',
    description: 'Get all submitted forms in the system',
    path: 'submittedForm',
    handler: middleware.get,
  },
  {
    method: 'get',
    description: 'Get a submitted form by ID',
    path: 'submittedForm',
    handler: middleware.getById,
  },
];
