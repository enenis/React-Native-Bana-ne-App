import React from 'react'
import { TouchableOpacity,Text } from 'react-native'
import Icon from 'react-native-vector-icons/Octicons'
import styles from "./FloatingButton.style"

function FloatingButton({onPress,icon}) {
  return (
    <TouchableOpacity style={styles.containerr} onPress={onPress}>
        {/* <Icon name={icon} color="white" size={30} /> */}
        <Text style={{color:"white",fontSize:35,marginBottom:3}}>+</Text>
    </TouchableOpacity>
  )
}

export default FloatingButton