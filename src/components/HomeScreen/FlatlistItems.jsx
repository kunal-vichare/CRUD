import { View, Text, StyleSheet,Image, TouchableOpacity} from 'react-native'
import React,{ useState } from 'react'
import DropIcon from 'react-native-vector-icons/FontAwesome';
import {Menu, Divider,Modal, Portal} from 'react-native-paper';

const FlatlistItems = ({item,navigation}) => {
  const [visible, setVisible] = useState(false);
  const openMenu = () => setVisible(true);
  const closeMenu = () => setVisible(false);
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
        <Menu 
          visible={visible}
          onDismiss={closeMenu}
          anchor={
            <TouchableOpacity 
              onPress={openMenu}
              style={styles.sortBtn}
            >
              <DropIcon name="chevron-down" size ={16} />
            </TouchableOpacity>
          }
        >
            <Menu.Item onPress={()=> navigation.navigate('Add_Edit_user',{user : item, mode : 'edit'})} title="Edit" />
            <Divider/>
            <Menu.Item onPress={()=> navigation.navigate('Add_Edit_user',{user : item, mode : 'delete'})} title="Delete" />
        </Menu>
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
      marginLeft: 370,
    }
})

export default FlatlistItems