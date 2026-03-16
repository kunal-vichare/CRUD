import { View, Text, StyleSheet, TouchableOpacity, Alert} from 'react-native'
import React, { useEffect, useState } from 'react'
import { useNavigation } from '@react-navigation/native';
import {postUser} from '../../services/api';
import { useRoute } from '@react-navigation/native';


const ButtonContainer = ({formData,setFormData}) => {
  const route = useRoute();
  const mode = route.params?.mode;
  const navigation = useNavigation();
  const [disabled,setDisabled] = useState(false);

  useEffect(()=>{
    if (mode==='edit' || mode==='delete') {
    setDisabled(true);
  } else {
    setDisabled(false);
  }
  },[mode]);
  
  // Post API
  const handleSubmit = async() => {
    try {
      await postUser(formData);
      setFormData({name:'',email:'',role:'',phone:'',status:''});
      navigation.goBack();
    } catch (error){
      console.log(error);
      Alert.alert('Error','Failed to post the data');
    }   
  }

  return (
      <View style={styles.btnContainer}>
        <TouchableOpacity 
        style={styles.cancelbtn}
        onPress= {()=> navigation.goBack()}
        >
          <Text style={styles.cancelText}>Cancel</Text>
        </TouchableOpacity>

        <Text style={styles.text}>Add/Edit User</Text>

        <TouchableOpacity 
        style= {!disabled ? styles.enableSaveBtn : styles.disableSaveBtn}
        onPress={handleSubmit}
        disabled={disabled}
        >
          <Text style = {!disabled ? styles.enableSaveText : styles.disableSaveText}>
            Save
          </Text>
        </TouchableOpacity>
      </View>
  )
}
const styles = StyleSheet.create({
  btnContainer : {
    flexDirection : 'row',
    backgroundColor : '#fff',
    height : 60,
    // marginBottom : 20
  },
  cancelbtn : {
    backgroundColor : '#fff',
    padding : 10,
    marginLeft : 10
  },
    cancelText: {
    fontSize: 20,
    fontWeight: 'bold'
  },
  text : {
    fontWeight : 'bold',
    fontSize: 20,
    marginLeft:45,
    marginRight: 45,
    padding : 10,
  },
  enableSaveBtn :  {
    backgroundColor : '#001aff',
    height : 30,
    width : 80,
    borderRadius : 10,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 10
    // padding : 10,
  },
    disableSaveBtn :  {
    backgroundColor : '#ccc',
    height : 30,
    width : 80,
    borderRadius : 10,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 10
    // padding : 10,
  },
    enableSaveText : {
    color : '#fff',
    fontWeight : 'bold',
    fontSize : 20,
  },
  disableSaveText : {
    color : '#4f4e4e',
    fontWeight : 'bold',
    fontSize : 20,
  },
})
export default ButtonContainer