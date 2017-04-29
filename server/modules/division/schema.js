'use strict';

module.exports = {
  name: {
    name: 'name',
    title: 'Name',
    description: 'The machine-readable name of the Divison.',
    type: 'string',
    unique: true,
    required: true,
  },
  title: {
    name: 'title',
    title: 'Title',
    description: 'The human-readable title of the Divison.',
    type: 'string',
    unique: true,
    required: true,
  },
  abbreviation: {
    name: 'abbreviation',
    title: 'Abbreviation',
    description: 'The abbreviation of the Divison.',
    type: 'string',
    unique: true,
    required: true,
  },
  parent: {
    name: 'parent',
    title: 'Parent Divison',
    type: 'id',
    reference: 'divison',
    description: 'The Divison that contains this Divison.',
    type: 'string',
  },
};
