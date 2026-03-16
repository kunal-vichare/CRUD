import { View, Text, StyleSheet, TouchableOpacity, Alert, StatusBar } from 'react-native'
import React, { useState } from 'react'
import { useRoute } from '@react-navigation/native';
import { useNavigation } from '@react-navigation/native';
import {patchUser,deleteUser,postUser} from "../../services/api";

const DynamicButton = ({formData,setFormData}) => {
    const route = useRoute();
    const mode = route.params?.mode;
    const navigation = useNavigation();

    //Patch API
    const handleUpdate = async()=> {
        try {
        await patchUser(formData.id,formData)
        setFormData({name:'',email:'',role:'',phone:'',status:''});
        navigation.goBack();
        } catch (error) {
          console.log(error);         
        Alert.alert('Error','Failed to Update Data')
        }
    }

      //Delete API
  const handleDelete = async() => {
    try {
      await deleteUser(formData.id);
      setFormData({name:'',email:'',role:'',phone:'',status:''});
      navigation.goBack();
    } catch (error) {
      console.log(error);      
      Alert.alert('Error','Failed to delete data');
    }
    };

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
        <View style={styles.deleteContainer}>
            <TouchableOpacity
            style=
            {mode === 'edit' ? 
            styles.editButton : 
            mode === 'delete' ? 
            styles.deleteButton :
            styles.saveButton
            }
            onPress=
            {mode === 'edit' ? 
            handleUpdate : 
            mode === 'delete' ?
            handleDelete : 
            handleSubmit
            }
            >
                <Text style={{color:'#ffff', fontWeight: 'bold'}}>
                {
                  mode === 'edit' ?
                  'Update user' :
                  mode === 'delete' ?
                  'Delete user' :
                  'Save user'
                }
                </Text>
            </TouchableOpacity>
        </View>
    )
}
const styles = StyleSheet.create({
  deleteContainer : {
      padding:15,
      backgroundColor: '#fff'
  },
  deleteButton:{
     backgroundColor: '#df1d1d',
     justifyContent:'center',
     alignItems: 'center',
     padding:10,
     borderRadius:30,
  },
  editButton: {
     backgroundColor: '#037605',
     justifyContent:'center',
     alignItems: 'center',
     padding:10,
     borderRadius:30,
  },
  saveButton : {
     backgroundColor: '#252ff9',
     justifyContent:'center',
     alignItems: 'center',
     padding:10,
     borderRadius:30,
  }
})
export default DynamicButton