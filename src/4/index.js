import React from 'react'
import {View, Button, Text} from 'react-native'
import {observable} from 'mobx'
import {observer} from 'mobx-react/native'

const H2 = ({children}) => <Text style={{fontSize:40}} >{children}</Text>
/*For the decorate 1-project : Turn above into =>
@Extends(Text) class H2 {
  style= ({style}) => Object.assign(style, {fontSize:40})
}
*/

class Gun {

}

exports.view = ()=>
  <View>
    <H2>Proxy Test </H2>
  </View>

exports.name="Proxy"
exports.description= `Utvärdering av proxy som den nya re-render-metoden`
