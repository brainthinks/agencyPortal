'use strict';

module.exports = {
  name: {
    name: 'name',
    title: 'Name',
    description: 'The machine-readable name of the relationship.',
    type: 'string',
    unique: true,
    required: true,
  },
  title: {
    name: 'title',
    title: 'Title',
    description: 'The human-readable title of the relationship.',
    type: 'string',
    unique: true,
    required: true,
  },
  description: {
    name: 'description',
    title: 'Description',
    description: 'The human-readable description of the relationship.',
    type: 'string',
    unique: true,
    required: true,
  },
};
