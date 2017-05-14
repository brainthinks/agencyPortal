'use strict';

module.exports = [
  {
    method: 'post',
    description: 'Create an approval path',
    path: 'approval',
  },
  {
    method: 'patch',
    description: 'Update an approval path',
    path: 'approval',
  },
  {
    method: 'put',
    description: 'Overwrite an approval path',
    path: 'approval',
  },
  {
    method: 'get',
    description: 'Get all approval paths in the system',
    path: 'approval',
  },
  {
    method: 'get',
    description: 'Get an approval path by ID',
    path: 'approval/:id',
  },
];
