import React,{useState} from 'react'
import { View,Text } from 'react-native'
import Button from '../../../components/Button'
import Input from '../../../components/Input'
import styles from "./Sign.style"
import {Formik} from 'formik';
import auth from "@react-native-firebase/auth"
import { showMessage, } from "react-native-flash-message";
import authErrorMessageParser from '../../../utils/authErrorMessageParser';

const initalFormValues = {
  usermail: '',
  password: '',
  repassword: '',
};

const Sign=({navigation})=> {
  const[loading,setLoading] = useState(false)

  function handleLogin(){
    navigation.goBack()
  }

 async function handleFormSubmit(formValues){
    if(formValues.password !== formValues.repassword){
      showMessage({
        message: "Şifreler Uyuşmuyor",
        type: "danger",
      });
      return;
    }
    try {
      setLoading(true)
     await auth().createUserWithEmailAndPassword(
      formValues.usermail,
      formValues.password)
      setLoading(false)
      showMessage({
        message:"Kullanıcı Oluşturuldu",
        type: "success",
      });
      navigation.navigate("LoginPage")
      
    } catch (error) {
      showMessage({
        message:authErrorMessageParser(error.code),
        type: "warning",
      });
      setLoading(false)
    }
  }
  return (
        <View style={styles.Sign}>
          <Text style={styles.header}>bana ne_?</Text>
          <Formik initialValues={initalFormValues} onSubmit={handleFormSubmit}>
            {({values,handleChange,handleSubmit})=>(
            <>
            <Input onType={handleChange("usermail")} value={values.usermail} placeholder="e-postanızı giriniz..." />
            <Input isSecure={true} onType={handleChange("password")} value={values.password} placeholder="şifrenizi giriniz..." />
            <Input isSecure={true} onType={handleChange("repassword")} value={values.repassword} placeholder="şifrenizi tekrar giriniz..." />
            <Button text="Kayıt Ol" onPress={handleSubmit} loading={loading}/>
            </>
            )}
          </Formik>
            <Button text="Geri" theme="secondary" onPress={handleLogin} />
        </View>
  )
}

export default Sign