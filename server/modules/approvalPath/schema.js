'use strict';

module.exports = {
  supervisor: {
    name: 'supervisor',
    title: 'Supervisor Approval Required',
    description: 'Is the approval of the user\'s supervisor necessary?',
    type: 'boolean',
    default: true,
  },
  purchaser: {
    name: 'purchaser',
    title: 'Divsion Purchaser Approval Required',
    description: 'Is the approval of the user\'s division\'s purchaser necessary?',
    type: 'boolean',
    default: true,
  },
  chief: {
    name: 'chief',
    title: 'Supervisor Approval Required',
    description: 'Is the approval of the user\'s division\'s chief necessary?',
    type: 'boolean',
    default: true,
  },
  director: {
    name: 'director',
    title: 'Director Approval Required',
    description: 'Is the approval of the user\'s agency\'s director necessary?',
    type: 'boolean',
    default: true,
  },
};
