'use strict';

module.exports = {
  name: {
    name: 'name',
    title: 'Name',
    description: 'The machine-readable name of the form.',
    type: 'string',
    unique: true,
    required: true,
  },
  title: {
    name: 'title',
    title: 'Title',
    description: 'The human-readable title of the form.',
    type: 'string',
    unique: true,
    required: true,
  },
  description: {
    name: 'description',
    title: 'Description',
    description: 'A summary of the form.',
    type: 'string',
    unique: true,
    required: true,
  },
  entries: {
    name: 'entries',
    title: 'Entries',
    description: 'The entries that make up the form.',
    type: 'collection',
    reference: 'entry',
    default: [],
  },
  approvalPaths: {
    name: 'approvalPaths',
    title: 'Approval Paths',
    description: 'The approval paths required for this form to be approved.',
    type: 'collection',
    reference: 'approvalPath',
    default: [],
  },
};
