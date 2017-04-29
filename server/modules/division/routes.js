'use strict';

module.exports = [
  {
    method: 'post',
    description: 'Create a division',
    path: 'division',
  },
  {
    method: 'patch',
    description: 'Update a division',
    path: 'division',
  },
  {
    method: 'put',
    description: 'Overwrite a division',
    path: 'division',
  },
  {
    method: 'get',
    description: 'Get all divisions in the system',
    path: 'division',
  },
  {
    method: 'get',
    description: 'Get a division by ID',
    path: 'division/:id',
  },
];
