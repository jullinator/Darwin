import _ from 'react-native'
import React ,{createElement as $} from 'react'

exports.view = ()=>
  $(_.Text, null, 'Hello World!')


exports.name = 'Hello World'

exports.description = `Just a simple Hello World Sample. First one`
exports.tags = ["system-test", "simple"]
