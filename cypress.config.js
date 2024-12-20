module.exports = {
  reporter: 'cypress-mochawesome-reporter',
  e2e: {
    baseURL:'https://naveenautomationlabs.com/opencart/index.php?route=account/login',
    setupNodeEvents(on, config) {
      //implement node event listener files here
      require('cypress-mochawesome-reporter/plugin')(on);
    },
  },
  env:{
    URL:'https://naveenautomationlabs.com/opencart/index.php?route=account/register'
  }
};
