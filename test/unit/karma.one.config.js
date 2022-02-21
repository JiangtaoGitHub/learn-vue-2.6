const base = require('./karma.base.config.js')

module.exports = function (config) {
  config.set(Object.assign(base, {
    files: [
      './one.js'
    ],
    preprocessors: {
      './one.js': ['webpack', 'sourcemap']
    },
    browsers: ['ChromeDebugging'],
    customLaunchers: {
      ChromeDebugging: {
        base: 'Chrome',
        flags: [ '--remote-debugging-port=9333' ]
      }
    },
    reporters: ['progress'],
    singleRun: true,
    plugins: base.plugins.concat([
      'karma-chrome-launcher',
      'karma-firefox-launcher',
      'karma-safari-launcher'
    ])
  }))
}
