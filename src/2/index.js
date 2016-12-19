import {Touchable} from '../components'
import React from 'react'
import {View, ScrollView, Text} from 'react-native'
import {observable} from 'mobx'
import {observer} from 'mobx-react/native'

exports.name = "Counter"
exports.description = `Simple counter with mobx. Uses a class type.`



class Counter {

  @observable count = 0

  Inc = () => <Touchable onPress={()=>this.count++}> + </Touchable>

  Count = observer(()=> <Text style={{fontSize: 35}} >{this.count}</Text>)

  Dec = () => <Touchable onPress={()=>this.count--}> - </Touchable>

  Box = ({children}) => <View style={{borderWidth:2, borderRadius:20}}>{children}</View>

}


let counters = [
  new Counter(),
  new Counter()
]



exports.view = ()=>
  <View>
    {counters.map(({Box, Count, Inc, Dec},i)=>
      <Box key={i}>
        <Inc />
        <Count />
        <Dec />
      </Box>
    )}
  </View>
