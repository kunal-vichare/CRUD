import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import React, { useEffect, useState } from 'react'
import Circle from 'react-native-vector-icons/Feather';
import Check_Circle from 'react-native-vector-icons/Feather';
import { useNavigation } from '@react-navigation/native';
import { useRoute } from '@react-navigation/native';

const Role = () => {

  const[role,setRole]=useState({
    all : false,
    manager : false,
    admin : false,
    user : false,
    ceo : false,
    director : false,
  })
  const navigation = useNavigation();
  const route = useRoute();

  // const setRolesTrue = ()=>Object.keys(role).forEach(item=>role[item]=true);

  //trueStatusCount is how much true values in status always 1
  const trueStatusCount = route.params?.trueStatusCount
  //activeStatus for array of active Status eg.[active,inactive]
  const activeStatus = route.params?.activeStatus
  //trueCount is no of true role for badge number
  const trueCount = Object.values(role).filter(item => item === true).length;
  //activeRoles for array of current active roles
  const activeRoles = Object.keys(role).filter(item=>role[item]===true)

  // console.log("Selected Status: "+SelectedStatus)

  return (
    <View style={styles.container}>
      {trueCount>0 && (
        <View style={styles.selectedRolesContainer}>
          <Text style={styles.selectedRolesText}>
            {"Selected Roles: " + trueCount}
          </Text>
        </View>
      )}
      {/* <View style={styles.itemContainer}>
        <Text style={styles.text}>All</Text>
        <TouchableOpacity 
          style={styles.btn}
          onPress={()=>setRole({...role, all : !role.all    
          })}
          // onPress={setRolesTrue}
        >
          {!role.all ? <Circle name="circle" size={24} /> : <Check_Circle name="check-circle" size={24}/>}
        </TouchableOpacity>
      </View> */}

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
                    onPress={()=>{
                      navigation.navigate({
                      name : 'Filters',
                      // SelectedStatus : SelectedStatus,
                      params : {
                        activeRoles : activeRoles ,
                        activeStatus : activeStatus, 
                        trueCount : trueCount ,
                        trueStatusCount: trueStatusCount, 
                      },
                      merge : true,
                      });
                      // navigation.goBack();
                    }}
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
    position:'absolute',
    // bottom:0,
    left:0,
    right:0,
    top:750,
    padding:15,
    // borderColor:'#ccc'
    // top:550
  },
  btnWrap: {
    // position:'absolute',
    // top:480,
    // left:100,
    flexDirection:'row',
    // height:70,
    // borderTopRightRadius:40,
    // borderTopLeftRadius:40,
    // alignItems:'center',
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
    selectedRolesContainer : {
    // position : 'absolute',
    right:0,
    left:5,
    width:165,
    height:32,
    alignItems:'center',
    justifyContent:'center',
    backgroundColor: '#e2f512',
    borderRadius:30,
    marginBottom:15,
  },
  selectedRolesText : {
    fontSize:18,
    fontWeight:'900'
  }

})

export default Role