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
  submittedOn: {
    name: 'submittedOn',
    title: 'Date of Submission',
    description: 'The date and time the user submitted the form.',
    type: 'timestamp',
    required: true,
  },
};
