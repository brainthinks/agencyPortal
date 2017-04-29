'use strict';

module.exports = {
  name: {
    name: 'name',
    title: 'Name',
    description: 'The machine-readable name of the Approval Path.',
    type: 'string',
    unique: true,
    required: true,
  },
  title: {
    name: 'title',
    title: 'Title',
    description: 'The human-readable title of the Approval Path.',
    type: 'string',
    unique: true,
    required: true,
  },
  abbreviation: {
    name: 'abbreviation',
    title: 'Abbreviation',
    description: 'The abbreviation of the Approval Path.',
    type: 'string',
    unique: true,
    required: true,
  },
  parent: {
    name: 'parent',
    title: 'Parent Approval Path',
    description: 'The Approval Path that contains this Approval Path.',
    type: 'string',
  },
};
