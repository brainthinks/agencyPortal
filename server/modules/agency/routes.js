'use strict';

module.exports = [
  {
    method: 'post',
    description: 'Create a agency',
    path: 'agency',
  },
  {
    method: 'patch',
    description: 'Update a agency',
    path: 'agency',
  },
  {
    method: 'put',
    description: 'Overwrite a agency',
    path: 'agency',
  },
  {
    method: 'get',
    description: 'Get all agencies in the system',
    path: 'agency',
  },
  {
    method: 'get',
    description: 'Get a agency by ID',
    path: 'agency/:id',
  },
];
