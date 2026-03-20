import {StyleSheet, TouchableOpacity} from 'react-native';
import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useNavigation } from '@react-navigation/native';
import Back from 'react-native-vector-icons/Ionicons';
import Home_Screen from '../screens/Home_Screen';
import Empty_State from '../components/HomeScreen/SubComponents/EmptyState';
import Add_Edit_user from '../screens/Add_Edit_user';
import Filters from '../components/HomeScreen/SubComponents/Filters';
import Role from '../components/HomeScreen/SubComponents/Role';
import Loader from '../components/HomeScreen/SubComponents/Loader'

const Stack = createNativeStackNavigator();

const StackNavigation = () => {
   const navigation = useNavigation();
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
        name='Empty State' 
        component={Empty_State} 
        options={()=>({
          headerShown : false
        })}
      />
      <Stack.Screen 
        name='Loader' 
        component={Loader} 
        options={()=>({
          headerShown : false
        })}
      />
      <Stack.Screen 
        name='Filters' 
        component={Filters} 
        options={()=>({
          headerShown : true,
          headerLeft : ()=>(
            <TouchableOpacity 
            style={{marginRight:20}}
            onPress={()=> navigation.goBack()}
            >
              <Back name="chevron-back" size={35}/>
            </TouchableOpacity>
          ),
          headerTitleStyle: {
            fontSize:23,
            fontWeight:'bold',
          },
        })}
        
        
      />
      <Stack.Screen 
        name='Role' 
        component={Role} 
        options={()=>({
          headerShown : true,
           headerLeft : ()=>(
            <TouchableOpacity 
            style={{marginRight:20}}
            onPress={()=> navigation.goBack()}
            >
              <Back name="chevron-back" size={35}/>
            </TouchableOpacity>
          ),
          headerTitleStyle: {
            fontSize:23,
            fontWeight:'bold',
          },
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