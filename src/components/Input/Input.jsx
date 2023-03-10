import React from 'react'
import { TextInput, View } from 'react-native'
import styles from "./Input.style"
function Input({placeholder,onType,value,isSecure}) {
  return (
    <View style={styles.container}>
        <TextInput
        autoCapitalize='none'
        placeholder={placeholder}
        onChangeText={onType}
        value={value}
        secureTextEntry={isSecure}
        />
    </View>
  )
}

export default Input