"use strict";

const EmberApp = require("ember-cli/lib/broccoli/ember-app");

module.exports = function (defaults) {
  let app = new EmberApp(defaults, {
    sassOptions: {
      extension: "sass",
    },
    "ember-font-awesome": {
      removeUnusedIcons: false,
    },
  });

  return app.toTree();
};
