require('es6-promise/auto')

// import all helpers
// const helpersContext = require.context('../helpers', true)
// helpersContext.keys().forEach(helpersContext)

// require all test files aa
const testsContext = require.context('./modules/compiler', true, /parser\.spec$/)
testsContext.keys().forEach(testsContext)
