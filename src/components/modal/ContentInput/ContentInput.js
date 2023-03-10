import React from 'react'
import { View,TextInput } from 'react-native'
import Button from '../../Button'
import styles from "./ContentInput.style"
import Modal from "react-native-modal";

const ContentInputModal =({visible,onClose,onSend})=>{
const [text,setText]=React.useState(null)

function handleSend(){
    if(!text){
        return;
    }

    onSend(text)
    setText(null)
}
    return(
        <Modal
        style={styles.modal} 
        isVisible={visible} 
        onSwipeComplete={onClose} 
        onBackdropPress={onClose}
        onBackButtonPress={onClose}
        swipeDirection="down"
        >
            <View style={styles.container}>
                <View style={styles.input_container}>
                <TextInput 
                placeholder='Darla hadi milleti...'
                onChangeText={setText}
                multiline
                />
                </View>
                <Button text="Gönder" onPress={handleSend} />
            </View>
        </Modal>
    )
}
export default ContentInputModal