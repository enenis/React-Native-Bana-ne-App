import React from 'react'
import {NavigationContainer} from "@react-navigation/native"
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Login from './pages/auth/Login'
import Sign from './pages/auth/Sign'
import FlashMessage from "react-native-flash-message";
import Messages from './pages/Messages'
import colors from './styles/colors'
import auth from "@react-native-firebase/auth"
import Icon from "react-native-vector-icons/MaterialIcons"

const Stack=createNativeStackNavigator()

export default ()=> {
  const[userSession,setUserSession]=React.useState();

    React.useEffect(()=>{
      auth().onAuthStateChanged(user=>{
        setUserSession(!!user)
      })
    },[])


  const AuthStack = ()=>{
    return(
      <Stack.Navigator screenOptions={{headerShown:false}} >
      <Stack.Screen name='LoginPage' component={Login} />
      <Stack.Screen name='SignPage' component={Sign} />
      
      </Stack.Navigator>
    )
  }
  return (
    <NavigationContainer>
      
      {

        !userSession ?
         <AuthStack/> :
         <Stack.Navigator>
         <Stack.Screen name='MessagesPage' component={Messages}  options={{headerShown:true,headerTitle:"dertler",
        headerTitleAlign:"center",
        headerTintColor:colors.darkgreen, headerRight:()=><Icon name="logout" size={25} color={colors.darkgreen} onPress={()=>auth().signOut()}/> }}/>
        
        </Stack.Navigator>
      }
      
      
        {/* <Stack.Screen name='SignPage' component={Sign} /> */}
        
      
      <FlashMessage position="top" />
    </NavigationContainer>
  )
}
