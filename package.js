Package.describe({
  name: "orderlion:impersonate",
  summary: "Impersonate users in Meteor",
  version: "0.4.0",
  git: "https://github.com/orderlion/meteor-impersonate.git",
});

Package.onUse(function (api, where) {

  api.use([
    "accounts-base",
    "reactive-var",
    "meteor-safereactivevar",
    "tracker"
  ], "client");

  api.use([
    "random",
    "mongo",
    "check",
  ]);

  api.addFiles([
    "server/lib.js"
  ], "server");

  api.addFiles([
    "client/js-cookie.js",
    "client/lib.js"
  ], "client");

  api.export("Impersonate");

});