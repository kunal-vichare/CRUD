import { View,Text, TouchableOpacity, StyleSheet,Modal} from 'react-native'
import React,{useState } from 'react'
import { useNavigation } from '@react-navigation/native';
import Arrow from 'react-native-vector-icons/FontAwesome6';
import Cross from 'react-native-vector-icons/Entypo';
import Circle from 'react-native-vector-icons/Feather';
import Check_Circle from 'react-native-vector-icons/Feather';
import { useRoute } from '@react-navigation/native';

const Filters = () => {
    const[status,setStatus] = useState({
      all: false,
      active : false,
      inactive : false
    })
    const [modalVisible,setModalVisible] = useState(false);
    const openModal = () => setModalVisible(true);
    const closeModal = () => setModalVisible(false);
    const navigation = useNavigation();
    const route = useRoute();
    const trueCount = route.params?.trueCount;

  return (
  <View style={styles.container}>
    <View style={styles.filterContainer}>
        <Text style={styles.filterHeader}>
            Role
        </Text>
        { trueCount>0 && (
        <View style={styles.badgeContainer}>
          <Text style={styles.badgeText}>{trueCount}</Text>
        </View>
        )}

        <View style={styles.btnContainer}>
            <TouchableOpacity 
              style={styles.roleBtn}
              onPress={()=>{navigation.navigate("Role")}}
            >
                <View>
                    <Text style={styles.selectText}>
                        Select
                    </Text>
                </View>
                <View style={{marginLeft:300}}>
                    <Arrow name="greater-than" size={18}/>
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
                    <Arrow name="greater-than" size={18}/>
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
            <TouchableOpacity 
              style={styles.applyBtn}
              onPress={()=>{navigation.navigate("All users",{trueCount : trueCount})}}
            >
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
                All
              </Text>
              <View style={styles.radioBtn}>
                <TouchableOpacity
                    onPress={()=>setStatus({...status,all:true,active:false,inactive:false})}
                >
                {!status.all ? <Circle name="circle" size={24}/> : <Check_Circle name="check-circle" size={24}/>}
                </TouchableOpacity>

                </View>
            </View>
            <View style={styles.modalBtnContainer}>
              <Text style={styles.modalText}>
                Active
              </Text>
              <View style={styles.radioBtn}>
                <TouchableOpacity
                    onPress={()=>setStatus({...status,all:false,active:true,inactive:false})}
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
                    onPress={()=>setStatus({...status,all:false,active:false,inactive:true})}
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
 filterContainer:{
    flexDirection : 'column'
  },
  filterHeader : {
    fontSize : 23,
    fontWeight : '600'
  },
  container : {
    padding:10,
    marginTop:5
  },
  btnContainer:{
    flexDirection: 'row',
  },
  roleBtn: {
    flexDirection:'row',
    width:'100%',
    borderWidth:2,
    padding:9,
    borderRadius:20
  },
    filterHeader:{
    fontSize: 22,
    fontWeight: '700',
    padding : 10
  },
  selectText : {
    fontSize:18,
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
  },
  modalWrap : {
    borderTopRightRadius:40,
    borderTopLeftRadius:40,
    backgroundColor: 'rgb(255, 255, 255)',
  },
  bottomBtnContainer : {
    top:550
  },
  btnWrap: {
    flexDirection:'row',
    height:70,
    borderTopRightRadius:40,
    borderTopLeftRadius:40,
    alignItems:'center',
    justifyContent:'center',
  },
  clearBtn : {
    backgroundColor : '#5f5e5e',
    padding : 15,
    borderRadius : 15,
    borderWidth:2,
    marginRight:50,
  },
  applyBtn : {
    backgroundColor : '#4040f7',
    padding : 15,
    borderRadius : 15,
    borderWidth:2,
  },
  clearText : {
    color:'#fff',
    fontSize : 15,
    fontWeight : 'bold'
  },
  applyText : {
    color:'#fff',
    fontSize : 15,
    fontWeight : 'bold'
  },
  radioBtn : {
    flex:1,
    justifyContent:'flex-end',
    alignItems:'flex-end',
    padding:20,
    marginRight:30
  },
  badgeContainer : {
    position:'absolute',
    top: 10,
    left:60,
    backgroundColor:'#0596f7',
    height:30,
    width:30,
    alignItems:'center',
    justifyContent:'center',
    borderRadius:15,
  },
  badgeText : {
    fontSize : 20,
    fontWeight:'700',
    color: '#fff'
  }
})

export default Filters