'use strict';

module.exports = {
  userId: {
    name: 'userId',
    title: 'User ID',
    description: 'The ID of the user who sumitted this entry.',
    type: 'id',
    reference: 'user',
    required: true,
  },
  submittedFormId: {
    name: 'submittedFormId',
    title: 'Submitted Form ID',
    description: 'The ID of the form that the user submitted.',
    type: 'id',
    reference: 'submittedForm',
    required: true,
  },
  entryId: {
    name: 'entryId',
    title: 'Entry ID',
    description: 'The ID of the entry that was submitted.',
    type: 'id',
    reference: 'entry',
    required: true,
  },
  choices: {
    name: 'choices',
    title: 'Choices',
    description: 'The choices made by the user for this entry.',
    type: 'collection',
    default: [],
  },
};
