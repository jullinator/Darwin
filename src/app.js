//@flow
import React ,{createElement as $} from 'react'
import _ from 'react-native'
import {observer} from 'mobx-react/native'



module.exports = observer(({views}) =>
  $(_.ScrollView, null,
    views.map(view=> $(view, null,null) )
  )
)
