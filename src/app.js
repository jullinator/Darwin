//@flow
import React ,{Component, createElement as $} from 'react'
import {Touchable} from './components'
import _ ,{View, ScrollView, Text} from 'react-native'
import {observer} from 'mobx-react/native'
import {Actions, Router, Scene} from 'react-native-mobx'


class List extends Component {
  components = require('./component-array')
  route = (mini) => () => Actions.single({mini})
  render= ()=>
    <ScrollView>
      {this.components.map((component, i)=>
        <Touchable key={i} onPress={this.route(component)}>{component.name}</Touchable>
      )}
    </ScrollView>
}
class Single extends Component {

  render= ()=>{
     let {mini} = this.props
     return $(mini.view, {}, null)
  }
}

module.exports = observer(({components}) =>
  <Router>
    <Scene key="list" component={List} hideNavBar />
    <Scene key="single" component={Single} />
  </Router>
)
