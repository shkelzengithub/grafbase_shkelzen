"use strict";
exports.__esModule = true;
var sdk_1 = require("@grafbase/sdk");
var User = sdk_1.g.model('User', {
    name: sdk_1.g.string().length({ min: 2, max: 20 }),
    email: sdk_1.g.string().unique(),
    avatarUrl: sdk_1.g.url(),
    description: sdk_1.g.string().optional(),
    githubUrl: sdk_1.g.url().optional(),
    linkedInUrl: sdk_1.g.url().optional(),
    projects: sdk_1.g.relation(function () { return Project; }).list().
        optional()
});
var Project = sdk_1.g.model('Project', {
    title: sdk_1.g.string().length({ min: 3 }),
    description: sdk_1.g.string(),
    image: sdk_1.g.url(),
    liveSiteUrl: sdk_1.g.url(),
    githubUUrl: sdk_1.g.url(),
    category: sdk_1.g.string().search(),
    createdBy: sdk_1.g.relation(function () { return User; })
});
exports["default"] = sdk_1.config({
    schema: sdk_1.g
});
