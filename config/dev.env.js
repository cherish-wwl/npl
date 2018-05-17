'use strict'
const merge = require('webpack-merge')
const prodEnv = require('./prod.env')

module.exports = merge(prodEnv, {
  NODE_ENV: '"development"',
  // BASE_API: '"http://192.168.95.57:8090"'
  // BASE_API: '"http://192.168.16.97:8090"'//dian
      BASE_API: '"http://192.168.16.142:8090"  '
})
