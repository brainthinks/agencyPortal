'use strict';

module.exports = [
  {
    method: 'post',
    description: 'Create an approval path',
    path: 'approvalPath',
  },
  {
    method: 'patch',
    description: 'Update an approval path',
    path: 'approvalPath',
  },
  {
    method: 'put',
    description: 'Overwrite an approval path',
    path: 'approvalPath',
  },
  {
    method: 'get',
    description: 'Get all approval paths in the system',
    path: 'approvalPath',
  },
  {
    method: 'get',
    description: 'Get an approval path by ID',
    path: 'approvalPath/:id',
  },
];
