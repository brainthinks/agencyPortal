'use strict';

const agencyRoutes = require('./modules/agency/routes');
const approvalPathRoutes = require('./modules/approvalPath/routes');
const divisionRoutes = require('./modules/division/routes');
const entryRoutes = require('./modules/entry/routes');
const formRoutes = require('./modules/form/routes');
const groupRoutes = require('./modules/group/routes');
const jobRoleRoutes = require('./modules/jobRole/routes');
const submittedEntryRoutes = require('./modules/submittedEntry/routes');
const submittedFormRoutes = require('./modules/submittedForm/routes');
const userRoutes = require('./modules/user/routes');

const RouteCollection = require('./collections/Route');

module.exports = (app, db) => {
  return RouteCollection.factory(app)
    .addManyFromData(agencyRoutes)
    .addManyFromData(approvalPathRoutes)
    .addManyFromData(divisionRoutes)
    .addManyFromData(entryRoutes)
    .addManyFromData(formRoutes)
    .addManyFromData(groupRoutes)
    .addManyFromData(jobRoleRoutes)
    .addManyFromData(submittedEntryRoutes)
    .addManyFromData(submittedFormRoutes)
    .addManyFromData(userRoutes);
};
