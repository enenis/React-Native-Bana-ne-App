import React from 'react'
import { View,Text,TouchableOpacity } from 'react-native'
import styles from "./MessageCard.style"
import  { formatDistance,parseISO } from 'date-fns'
import { tr } from 'date-fns/locale'

function MessageCard({message,onBanane}) {

    const formatedDate = formatDistance(parseISO(message.date), new Date(), {
         addSuffix: true,
         locale:tr
        })


  return (
    <View style={styles.container}>
        <View style={styles.inner_container}>
        <Text style={styles.user}>{message.username}</Text>
        <Text style={styles.date}>{formatedDate}</Text>
        </View>
        <View style={styles.box_container}>
        <Text style={styles.title}>{message.text}</Text>
        <TouchableOpacity style={styles.box} onPress={onBanane}>
          {
            !!message.dislike&&(
              <View style={styles.dislike_container}>
                <Text style={styles.dislike}>{message.dislike}</Text>
              </View>
            )
          }
          <Text style={styles.box_text}>bana ne?</Text>
        </TouchableOpacity>
        </View>
    </View>
  )
}

export default MessageCard