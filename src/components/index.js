import React ,{createElement as $} from 'react'
import rn from 'react-native'

export const Touchable = (props)=>
  $(rn.TouchableOpacity, {props.onPress},
    $(rn.Text, {}, props.children)
  )

export const RoundButton = (props) =>
  $(rn.Button, {
    title: props.title,
    onPress: props.onPress,
    style:{

    }
  }, null)

export const Label = (props) =>
    $(rn.View, {},
      $(rn.Text, {}, props.title),
      $(rn.Text, {}, props.description)
    )

export const LabeledInput = (props) =>
  $(rn.View, {},
    $(rn.Text, {}, props.label),
    $(rn.TextInput, {}, null)
  )
