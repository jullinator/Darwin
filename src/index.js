//@flow
import React ,{createElement as $} from 'react'
import _ from 'react-native'
var App = require('./app')

module.exports = ()=>
  $(App, {
    views:[
      require('./1')
    ]
  }, null)
