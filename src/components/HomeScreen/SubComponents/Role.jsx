import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import React, { useState } from 'react'
import Circle from 'react-native-vector-icons/Feather';
import Check_Circle from 'react-native-vector-icons/Feather';
import { useNavigation } from '@react-navigation/native';

const Role = () => {
  const[role,setRole]=useState({
    manager : false,
    admin : false,
    user : false,
    ceo : false,
    director : false,
  })
  const navigation = useNavigation();

  const trueCount = Object.values(role).filter(item => item === true).length;

  return (
    <View style={styles.container}>
      <View style={styles.itemContainer}>
        <Text style={styles.text}>Manager</Text>
        <TouchableOpacity 
          style={styles.btn}
          onPress={()=>setRole({...role, manager : !role.manager})}
        >
          {!role.manager ? <Circle name="circle" size={24} /> : <Check_Circle name="check-circle" size={24}/>}
        </TouchableOpacity>
      </View>
      <View style={styles.itemContainer}>
        <Text style={styles.text}>Admin</Text>
        <TouchableOpacity 
          style={styles.btn}
          onPress={()=>setRole({...role,admin : !role.admin})}
        >
          {!role.admin ? <Circle name="circle" size={24} /> : <Check_Circle name="check-circle" size={24}/>}
        </TouchableOpacity>
      </View>
      <View style={styles.itemContainer}>
        <Text style={styles.text}>User</Text>
        <TouchableOpacity 
          style={styles.btn}
          onPress={()=>setRole({...role,user : !role.user})}
        >
          {!role.user ? <Circle name="circle" size={24} /> : <Check_Circle name="check-circle" size={24}/>}
        </TouchableOpacity>
      </View>
      <View style={styles.itemContainer}>
        <Text style={styles.text}>CEO</Text>
        <TouchableOpacity 
          style={styles.btn}
          onPress={()=>setRole({...role,ceo : !role.ceo})}
        >
          {!role.ceo ? <Circle name="circle" size={24} /> : <Check_Circle name="check-circle" size={24}/>}
        </TouchableOpacity>
      </View>
      <View style={styles.itemContainer}>
        <Text style={styles.text}>Director</Text>
        <TouchableOpacity 
          style={styles.btn}
          onPress={()=>setRole({...role,director : !role.director})}
        >
          {!role.director ? <Circle name="circle" size={24} /> : <Check_Circle name="check-circle" size={24}/>}
        </TouchableOpacity>
        {/* <Text>{trueCount}</Text> */}
      </View>
      <View style={styles.bottomBtnContainer}>
                <View style={styles.btnWrap}>
                  <TouchableOpacity 
                    style={styles.clearBtn}
                    onPress={()=>setRole({manager:false,admin:false,user:false,ceo:false,director:false})}
                    >
                    <Text style={styles.clearText}>
                      Clear Filter
                    </Text>
                  </TouchableOpacity>
                  <TouchableOpacity 
                    style={styles.confirmBtn}
                    onPress={()=>{navigation.navigate("Filters",{trueCount : trueCount})}}
                  >
                    <Text style={styles.applyText}>
                      Confirm
                    </Text>
                  </TouchableOpacity>
                </View>
              </View>
    </View>
  )
}
const styles = StyleSheet.create({
  container : {
    flexDirection:'column',
    padding:20
  },
  itemContainer : {
    flexDirection:'row',
    // backgroundColor: '#fcefef',
    borderWidth:2,
    borderRadius:30,
    padding:15,
    marginBottom:15
  },
  btn : {
    flex:1,
    alignItems:'flex-end'
  },
  text : {
    fontSize:15,
    fontWeight:'900'
  },
  bottomBtnContainer : {
    // flex: 1,
    // justifyContent:'flex-end',
    top:380
  },
  btnWrap: {
    flexDirection:'row',
    // backgroundColor:'#fcefef',
    // height:70,
    // borderTopRightRadius:40,
    // borderTopLeftRadius:40,
    alignItems:'center',
    justifyContent:'center',
  },
  clearBtn : {
    backgroundColor : '#5f5e5e',
    padding : 15,
    borderRadius : 15,
    borderWidth:2,
    marginRight:50,
    // marginLeft:100,
    // marginTop: 20,
    // margi
    height:50
  },
  confirmBtn : {
    backgroundColor : '#4040f7',
    padding : 15,
    borderRadius : 15,
    borderWidth:2,
  },
  clearText : {
    fontSize : 15,
    fontWeight : 'bold',
    color:'#fff'
  },
  applyText : {
    fontSize : 15,
    fontWeight : 'bold',
    color:'#fff'
  },

})

export default Role