import { View, Text, StyleSheet,Image, TouchableOpacity} from 'react-native'
import React,{ useState } from 'react'
import DropIcon from 'react-native-vector-icons/FontAwesome';
import MenuIcon from 'react-native-vector-icons/SimpleLineIcons';
import Name from 'react-native-vector-icons/Ionicons';
import Email from 'react-native-vector-icons/MaterialIcons';
import Phone from 'react-native-vector-icons/Entypo';
import Role from 'react-native-vector-icons/MaterialIcons';
import Status from 'react-native-vector-icons/Zocial';
import {Menu, Divider} from 'react-native-paper';
import {SafeAreaView, SafeAreaProvider} from 'react-native-safe-area-context';

const FlatlistItems = ({item,navigation}) => {
  const[dropdown,setDropdown] = useState(false);
  const [visible, setVisible] = useState(false);
  const openMenu = () => setVisible(true);
  const closeMenu = () => setVisible(false);
  return (
    <SafeAreaProvider>
      <SafeAreaView>
    <View style={styles.contactItem}>
      <Image 
      source={{uri : item.avatar}}
      style={styles.image}
      />
      <View style={styles.flatListItemContainer}>
        <Text style={styles.name}><Name name="person" size={21}/>  {item.name}</Text>
        <Text style={styles.email}><Email name="email" size={18}/>  {item.email}</Text>
        <Text style={styles.mobileNo}><Phone name="old-mobile" size={16}/>  {item.phone}</Text>
        {
          dropdown && (
        <View>
        <Text style={styles.role}><Role name="work-history" size={15}/>  {item.role.label.toUpperCase()}</Text>
        <Text style={styles.status}><Status name="statusnet" size={14}/>  {item.status.label.toUpperCase()}</Text>
        </View>
          )
        }

      </View>

      <View style={styles.btnContainer}>
        <Menu 
          visible={visible}
          onDismiss={closeMenu}
          anchor={
            <TouchableOpacity 
              onPress={openMenu}
              style={styles.menuBtn}
            >
              <MenuIcon name="options-vertical" size ={16} />
            </TouchableOpacity>
          }
        >
            <Menu.Item onPress={()=> navigation.navigate('Add_Edit_user',{user : item, mode : 'edit'})} title="Edit" />
            <Divider/>
            <Menu.Item onPress={()=> navigation.navigate('Add_Edit_user',{user : item, mode : 'delete'})} title="Delete" />
        </Menu>
        <TouchableOpacity
          onPress={()=>setDropdown(!dropdown)}
        >
        <DropIcon name="angle-down" size={28} />
        </TouchableOpacity>
      </View>
    </View>  
          </SafeAreaView>
    </SafeAreaProvider>
  )
}

const styles = StyleSheet.create({
  contactItem : {
    backgroundColor : '#fff',
    // marginBottom: 30,
    // height:139,
    minHeight:139,
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
    role : {
    fontSize: 15,
    color: '#1B1B1B',
    flexDirection:'row',
    padding: 5,
    marginLeft : 20,
  },
    status : {
    fontSize: 14,
    color: '#1B1B1B',
    flexDirection:'row',
    padding: 5,
    marginLeft : 20,
  },
  // dropDownIcon : {
  //   position : 'absolute',
  //   left :370,
  //   top : 40,
  //   backgroundColor:'#fff'
  // },
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
    },
    menuBtn : {
      // position:'absolute',
      top:-35,
      // left:10,
    },
    flatListItemContainer:{
      flexDirection:"column",
      // minHeight:300,
    }
})

export default FlatlistItems