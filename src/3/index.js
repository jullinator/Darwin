import React from 'react'
import {View, Button, Text} from 'react-native'
import {observable} from 'mobx'
import {observer} from 'mobx-react/native'

function observant (key){
  return (target, prop, desc)=>({
    value: desc.value
  })
}
function action (element){
  return (target ,prop , desc)=>{
    desc.value = element
  }
}



class Gun{
  @observable rounds = 30


  @observant("rounds")
  Rounds(){
    return <Text>{this.rounds}</Text>
  }

  @action(() => <Button title="Shoot" onPress={()=>this.rounds--} />)
  Shoot
}
let gun = new Gun()

exports.view = ()=>
  <View>
    <gun.Rounds />
  </View>

exports.name="Decorate 1"
exports.description= `test of decorators such as react, observe, etc.`
