import {StyleSheet, TouchableOpacity} from 'react-native';
import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import PlusSquare from 'react-native-vector-icons/Feather';
import Home_Screen from '../screens/Home_Screen';
import Add_Edit_user from '../screens/Add_Edit_user';

const Stack = createNativeStackNavigator();

const StackNavigation = () => {
  return (
    <Stack.Navigator
        screenOptions={{
        contentStyle: 
        styles.screen
     }}
    >
      <Stack.Screen 
        name='All users' 
        component={Home_Screen} 
        options={()=>({
          headerShown : false
        })}
      />

      <Stack.Screen 
        name='Add_Edit_user' 
        component={Add_Edit_user} 
        options={()=>({
          headerShown : false,
        })}
      />
    </Stack.Navigator>
  )
}

    const styles = StyleSheet.create({
        screen : {
        backgroundColor : '#fff'
    }
})

export default StackNavigation