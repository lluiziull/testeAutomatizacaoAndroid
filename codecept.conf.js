exports.config = {
  output: './output',
  helpers: {
    Appium: {
      platform: 'Android',
      desiredCapabilities: {
        appPackage: 'com.qazandoapp',
        appActivity: 'MainActivity',
        deviceName: 'pixel',
        platformVersion: '9'
      }
    }
  },
  include: {
    I: './steps_file.js',
    loginPage: './pages/loginPage.js',
    homePage: './pages/homePage.js',
    codigoGerador: './utils/codigoGerador.js',
    nomeGerador:'./utils/nomeGerador.js',
  },
  mocha: {},
  bootstrap: null,
  timeout: null,
  teardown: null,
  hooks: [],
  gherkin: {
    features: './features/*.feature',
    steps: ['./step_definitions/steps.js']
  }
  ,
  plugins: {
    screenshotOnFail: {
      enabled: true
    },
    tryTo: {
      enabled: true
    },
    retryFailedStep: {
      enabled: false
    },
    retryTo: {
      enabled: true
    },
    eachElement: {
      enabled: true
    },
    pauseOnFail: {}
  },
  stepTimeout: 0,
  stepTimeoutOverride: [{
      pattern: 'wait.*',
      timeout: 0
    },
    {
      pattern: 'amOnPage',
      timeout: 0
    }
  ],
  tests: './test/*_test.js',
  name: 'testeAutomatizacaoAndroid'
}