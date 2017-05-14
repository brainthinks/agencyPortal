'use strict';

module.exports = {
  submittedFormId: {
    name: 'submittedFormId',
    title: 'Sumitted Form ID',
    description: 'The ID of the form for which this approvalRequest is required.',
    type: 'id',
    required: true,
  },
  submitterId: {
    name: 'submitterId',
    title: 'Submitter ID',
    description: 'The ID of the user who submitted the form that requires this approvalRequest.',
    type: 'id',
    required: true,
  },
  approverId: {
    name: 'approverId',
    title: 'Approver ID',
    description: 'The ID of the user whose approval is requested.',
    type: 'id',
    required: true,
  },
  relationshipId: {
    name: 'relationshipId',
    title: 'Relationship ID',
    description: 'The ID of the relationship that the submitter has with the approver.',
    type: 'id',
    required: true,
  },
  formSubmittedOn: {
    name: 'formSubmittedOn',
    title: 'Date of Form Submission',
    description: 'The date and time at which the associated submittedForm record was submitted. This field is duplicated from submittedForm.submittedOn',
    type: 'id',
    required: true,
  },
  requestedOn: {
    name: 'requestedOn',
    title: 'Date of Approval Request',
    description: 'The date and time this approvalRequest was made.  For the first approvalRequest of a given "submittedForm" record, this field will have the same value as the "timestamp" field on the associated "submittedForm" record.  If this approvalRequest is approved (not rejected), subsequent approvalRequest records will have this field\'s value set to the same value as the "respondedOn" field value of the previous approvalRequest record.  If this approvalRequest is not the first for the "submittedForm" record, this field will be given a value when and if the first approvalRequest is approved.',
    type: 'timestamp',
    default: null,
  },
  respondedOn: {
    name: 'respondedOn',
    title: 'Date of Approver Response',
    description: 'The date and time at which the approver either approved or rejected this approvalRequest.',
    type: 'timestamp',
    default: null,
  },
  approved: {
    name: 'approved',
    title: 'Approved',
    description: 'If this approvalRequest was approved, true.  If this approvalRequest was rejected, false.',
    type: 'boolean',
    default: null,
  },
  approverNotes: {
    name: 'approverNotes',
    title: 'Approver Notes',
    description: 'Free-form notes from the approver that are visible to the submitter.  If the approver is rejecting this approvalRequest, this field is required.',
    type: 'string',
    required: (approvalRequest) => !approvalRequest.approved,
  },
};
