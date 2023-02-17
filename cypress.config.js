const { defineConfig } = require('cypress')

module.exports = defineConfig({
    e2e: {
        specPattern : "cypress/support/e2e",
        supportFile : false,
        legacy: false
    },
    env: {
        baseUrl : "https://kasirdemo.belajarqa.com",
        email : "rahmansopian6@gmail.com",
        password : "S4PU74G4T"
    },
    pageLoadTimeout : 60000,
    chromeWebSecurity: false

})

    
