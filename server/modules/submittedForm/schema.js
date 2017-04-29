'use strict';

module.exports = {
  userId: {
    name: 'userId',
    title: 'User ID',
    description: 'The ID of the user who submitted this form.',
    type: 'id',
    reference: 'user',
    required: true,
  },
  formId: {
    name: 'formId',
    title: 'Form ID',
    description: 'The ID of the form the user submitted.',
    type: 'id',
    reference: 'form',
    required: true,
  },
  timestamp: {
    name: 'timestamp',
    title: 'Time of Submission',
    description: 'The time the user submitted the form.',
    type: 'timestamp',
    required: true,
  },
  approvedPaths: {
    name: 'approvedPaths',
    title: 'Approvals',
    description: 'The approvals steps that have been approved.',
    type: 'collection',
    default: [],
  },
};
