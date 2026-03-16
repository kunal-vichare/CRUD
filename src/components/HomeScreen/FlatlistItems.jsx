import { View, Text, StyleSheet,Image, TouchableOpacity} from 'react-native'
import React from 'react'

const FlatlistItems = ({item,navigation}) => {
  return (
<View style={styles.contactItem}>
      <Image 
      source={{uri : item.avatar}}
      style={styles.image}
      />
      <View style={{flexDirection:"column"}}>
        <Text style={styles.name}>{item.name}</Text>
        <Text style={styles.email}>{item.email}</Text>
        <Text style={styles.mobileNo}>{item.phone}</Text>
      </View>

      <View style={styles.btnContainer}>
        <TouchableOpacity 
        style={styles.editButton}
        onPress= {()=> navigation.navigate('Add_Edit_user',{user : item, mode : 'edit'})}
        >
          <Text style={{fontSize : 15,color:'#fff', fontWeight : 'bold',color:'#484747'}}>
            Edit
          </Text>
        </TouchableOpacity>
        <TouchableOpacity 
        style={styles.deleteButton}
         onPress= {()=> navigation.navigate('Add_Edit_user',{user : item, mode : 'delete'})}
        >
          <Text style={{fontSize : 15,color:'#fff', fontWeight : 'bold', color : 'red'}}>
            Delete
          </Text>
        </TouchableOpacity>
      </View>
    </View>
    
  )
}

const styles = StyleSheet.create({
  contactItem : {
    backgroundColor : '#fff',
    // marginBottom: 30,
    height:139,
    alignItems:'center',
    flexDirection : 'row',
  },
    image : {
    height:110, 
    width:110,
    borderRadius:55,
    marginLeft:10,
  },
  name : {
    fontSize: 21,
    color: '#080808',
    flexDirection:'row',
    padding: 5,
    marginLeft : 20,
  },
    email: {
    fontSize: 18,
    color: '#0C090A',
    flexDirection:'row',
    padding: 5,
    marginLeft : 20,
  },
    mobileNo : {
    fontSize: 16,
    color: '#1B1B1B',
    flexDirection:'row',
    padding: 5,
    marginLeft : 20,
  },
  dropDownIcon : {
    position : 'absolute',
    left :370,
    top : 40,
    backgroundColor:'#fff'
  },
  modalText : {
    fontWeight:'bold',
    color:'#fff',
    fontSize:12
  },
  editButton: {
    backgroundColor : '#d9d9d9',
    padding : 5,
    justifyContent:'center',
    alignItems: 'center',
    borderRadius:5
    // marginLeft: 160,
    // marginTop:15,
  },
  deleteButton : {
    backgroundColor : '#fad9d9',
    padding : 5,
    justifyContent:'center',
    alignItems: 'center',
    marginTop:10,
    borderRadius:5
  },
    btnContainer: {
      position:'absolute',
      marginLeft: 340,
    }
})

export default FlatlistItems