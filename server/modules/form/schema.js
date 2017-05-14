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
  approvals: {
    name: 'approvals',
    title: 'Approvals',
    description: 'A collection of relationshipId values that will determine the approvalRequest records that get created for all submittedForm records associated with this form.',
    type: 'collection',
    reference: 'relationship',
    default: [],
  },
};
