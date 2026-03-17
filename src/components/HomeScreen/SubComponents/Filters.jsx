import { View,Text, TouchableOpacity, StyleSheet,Modal} from 'react-native'
import React,{useState } from 'react'
import { useNavigation } from '@react-navigation/native';
import Arrow from 'react-native-vector-icons/FontAwesome6';
import Cross from 'react-native-vector-icons/Entypo';
import Circle from 'react-native-vector-icons/Feather';
import Check_Circle from 'react-native-vector-icons/Feather';


const Filters = () => {
    // const[active,setActive] = useState(false);
    // const[inActive,setInActive] = useState(false);
    const[status,setStatus] = useState({
      active : false,
      inactive : false
    })
    const [modalVisible,setModalVisible] = useState(false);
    const openModal = () => setModalVisible(true);
    const closeModal = () => setModalVisible(false);
    const navigation = useNavigation();
    // const [status, setStatus] = useState('');



  return (
  <View style={styles.container}>
    <View style={styles.filterContainer}>
        <Text style={styles.filterHeader}>
            Role
        </Text>
        <View style={styles.btnContainer}>
            <TouchableOpacity 
              style={styles.roleBtn}
              onPress={()=>{navigation.navigate("Role")}}
            >
                <View style={{}}>
                    <Text style={styles.selectText}>
                        Select
                    </Text>
                </View>
                <View style={{marginLeft:300}}>
                    <Arrow name="greater-than" size={18} style={{}}/>
                </View>
            </TouchableOpacity>
        </View>
    </View>

    <View style={styles.filterContainer}>
        <Text style={styles.filterHeader}>
            Status
        </Text>
        <View style={styles.btnContainer}>
            <TouchableOpacity 
                style={styles.roleBtn}
                onPress={openModal}
            >
                <View style={{}}>
                    <Text style={styles.selectText}>
                        Select
                    </Text>
                </View>
                <View style={{marginLeft:300}}>
                    <Arrow name="greater-than" size={18} style={{}}/>
                </View>
            </TouchableOpacity>
        </View>

        <View style={styles.bottomBtnContainer}>
          <View style={styles.btnWrap}>
            <TouchableOpacity style={styles.clearBtn}>
              <Text style={styles.clearText}>
                Clear
              </Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.applyBtn}>
              <Text style={styles.applyText}>
                Apply
              </Text>
            </TouchableOpacity>
          </View>
        </View>
    </View>

      
        <Modal 
            transparent={true}
            visible={modalVisible} 
            onDismiss={closeModal} 
            // contentContainerStyle={}
            animationType='slide'
        >
          <View style={styles.modalContainer}>
            <View style={styles.closeContainer}>
                <TouchableOpacity onPress={closeModal}>
                    <Cross name="circle-with-cross" size={50} />
                </TouchableOpacity>
            </View>
            <View style={styles.modalWrap}>
            <View style={styles.modalBtnContainer}>
              <Text style={styles.modalText}>
                Active
              </Text>
              <View style={styles.radioBtn}>
                <TouchableOpacity
                    onPress={()=>setStatus({...status,active:!status.active})}
                >
                {!status.active ? <Circle name="circle" size={24}/> : <Check_Circle name="check-circle" size={24}/>}
                </TouchableOpacity>

                </View>
            </View>
            <View style={styles.modalBtnContainer}>
              <Text style={styles.modalText}>
                Inactive
              </Text>
              <View style={styles.radioBtn}>
                <TouchableOpacity
                    onPress={()=>setStatus({...status,inactive:!status.inactive})}
                >
                {!status.inactive ? <Circle name="circle" size={24}/> : <Check_Circle name="check-circle" size={24}/>}
                </TouchableOpacity>
                </View>
            </View>
            </View>
          </View>
        </Modal>
    </View>
  )
}
const styles = StyleSheet.create({
  sortText : {
    fontSize: 15,
    fontWeight: 'bold',
    marginRight:10
  },
    filterText : {
    fontWeight : 'bold',
    fontSize : 15,
    marginRight : 10
  },
  filterBtn : {
     flexDirection:'row',
     marginTop: 10,
     marginBottom: 10,
  },
    sortBtn : {
    flexDirection:'row',
    marginTop: 10,
    marginBottom: 10,
    marginRight: 15,
  },

 filterContainer:{
    flexDirection : 'column'
  },
  filterHeader : {
    fontSize : 23,
    fontWeight : '600'
  },

  dropdownContainer : {
    position : 'absolute',
    left : 140,
    width:230,
  },
  menu : {

  },
  
  dropdown : {
    
  },
  container : {
    padding:10
  },
 
  filterHeader:{
    fontSize: 20,
    fontWeight: '700',
    padding : 10
  },
  btnContainer:{
    flexDirection: 'row',
    // backgroundColor: '#ae9df7'
  },
  roleBtn: {
    flexDirection:'row',
    width:'100%',
    backgroundColor: '#fcefef',
    padding:10,
    borderRadius:20
  },
  selectText : {
    fontSize:15,
    fontWeight: '500'
  },
    closeContainer : {
    marginBottom : 30,
    width:'100%',
    justifyContent:'center',
    alignItems:'center',
  },
    modalBtnContainer : {
    flexDirection : 'row',
    marginBottom : 10
  },
    modalText : {
        fontSize:20,
        fontWeight: 'bold',
        padding:10,
        marginTop : 10,
        marginLeft: 30
    },
    modalContainer : {
    flex:1,
    justifyContent:'flex-end',
    backgroundColor: 'rgba(0,0,0,0.5)',
    
    // backgroundColor:'rgba(0,0,0,0.8)',
  },
  modalWrap : {
    backgroundColor:'#fcefef',
    borderTopRightRadius:40,
    borderTopLeftRadius:40
  },
  bottomBtnContainer : {
    // flex: 1,
    // justifyContent:'flex-end',
    top:550
  },
  btnWrap: {
    flexDirection:'row',
    backgroundColor:'#fcefef',
    height:70,
    borderTopRightRadius:40,
    borderTopLeftRadius:40,
    alignItems:'center',
    justifyContent:'center',
  },
  clearBtn : {
    backgroundColor : '#e7e4e4',
    padding : 15,
    borderRadius : 15,
    borderWidth:1,
    marginRight:50,
    // marginLeft:100,
    // marginTop: 20,
    // margi
    height:50
  },
  applyBtn : {
    backgroundColor : '#dedef5',
    padding : 15,
    borderRadius : 15,
    borderWidth:1,
  },
  clearText : {
    fontSize : 15,
    fontWeight : 'bold'
  },
  applyText : {
    fontSize : 15,
    fontWeight : 'bold'
  },
  radioBtn : {
    flex:1,
    justifyContent:'flex-end',
    alignItems:'flex-end',
    padding:20,
    marginRight:30
  }
})

export default Filters