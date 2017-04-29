'use strict';

module.exports = [
  {
    method: 'post',
    description: 'Create an entry',
    path: 'entry',
    parameters: [],
    query: [],
  },
  {
    method: 'patch',
    description: 'Update an entry',
    path: 'entry',
    parameters: [],
    query: [],
  },
  {
    method: 'put',
    description: 'Overwrite an entry',
    path: 'entry',
    parameters: [],
    query: [],
  },
  {
    method: 'get',
    description: 'Get all entries in the system',
    path: 'entry',
    parameters: [],
    query: [],
  },
  {
    method: 'get',
    description: 'Get an entry by ID',
    path: 'entry',
    parameters: [ 'id' ],
    query: [],
  },
];
