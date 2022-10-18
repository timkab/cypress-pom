const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    //for now using this as a baseURL
    baseUrl: "https://staging.fieldwire.com/",
    viewportHeight: 1000,
    viewportWidth: 1200,
  },
});
