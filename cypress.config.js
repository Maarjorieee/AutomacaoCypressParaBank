const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: "icytgo",
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    video:true,
    reporter:'mochawesome',
    reporterOptions: {
      reportDir: 'cypress/reports/html',
      overwrite: false,
      html: true,
      json: false,
      timestamp: 'yyyy-mm-dd_HH-MM-ss',
      screenshotsFolder: 'cypress/screenshots'
    },
  },
});