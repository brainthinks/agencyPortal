'use strict';

module.exports = {
  type: {
    name: 'name',
    title: 'Name',
    description: 'The machine-readable name of the agency.',
    type: 'string',
    unique: true,
    required: true,
  },
  text: {
    name: 'title',
    title: 'Title',
    description: 'The human-readable title of the agency.',
    type: 'string',
    unique: true,
    required: true,
  },
  description: {
    name: 'abbreviation',
    title: 'Abbreviation',
    description: 'The abbreviation of the agency.',
    type: 'string',
    unique: true,
    required: true,
  },
  choices: {
    name: 'choices',
    title: 'Choices',
    description: 'The available choices for this entry.',
    type: 'collection',
    default: [],
  },
};
