import { StyleSheet } from 'react-native'
import colors from '../../styles/colors'

const base_style = StyleSheet.create({
    container:{
        
        margin:10,
        borderRadius:3,
        padding:7,
        alignItems:"center",

    },
    button_container:{
        flexDirection:"row",
        alignItems:"center"
    },
    text:{
        color:"white",
        fontWeight:"bold",
        // textAlign:"center",
        fontSize:17,
        marginLeft:5
    }
})

export default {
    primary: StyleSheet.create({
        ...base_style,
        container:{
            ...base_style.container,
            backgroundColor:colors.darkgreen
        },
        text:{
            ...base_style.text,
            color:"white",
        }
    }),

    secondary: StyleSheet.create({
        ...base_style,
        container:{
            ...base_style.container,
            backgroundColor:"white",
            borderWidth:1,
            borderColor:colors.darkgreen
        },
        text:{
            ...base_style.text,
            color:colors.darkgreen
        }
    })
}