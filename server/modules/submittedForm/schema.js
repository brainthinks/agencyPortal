'use strict';

module.exports = {
  name: {
    name: 'name',
    title: 'Name',
    description: 'The machine-readable name of the agency.',
    type: 'string',
    unique: true,
    required: true,
  },
  title: {
    name: 'title',
    title: 'Title',
    description: 'The human-readable title of the agency.',
    type: 'string',
    unique: true,
    required: true,
  },
  abbreviation: {
    name: 'abbreviation',
    title: 'Abbreviation',
    description: 'The abbreviation of the agency.',
    type: 'string',
    unique: true,
    required: true,
  },
  logoPath: {
    name: 'logoPath',
    title: 'Logo',
    description: 'The agency\'s logo.',
    type: 'string',
  },
};
