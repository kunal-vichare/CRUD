import { View,Text, TouchableOpacity, StyleSheet,Modal} from 'react-native'
import React,{useState } from 'react'
import { useNavigation } from '@react-navigation/native';
import Arrow from 'react-native-vector-icons/FontAwesome6';
import Cross from 'react-native-vector-icons/Entypo';
import Circle from 'react-native-vector-icons/Feather';
import Check_Circle from 'react-native-vector-icons/Feather';
import { useRoute } from '@react-navigation/native';

const Filters = () => {
    const navigation = useNavigation();
    const route = useRoute();
      const[filter,setFilter] = useState({
      status : {
        all: false,
        active : false,
        inactive : false
      }
    })

    const clearFilter = () => {
      setFilter({...filter,status: {all :false,active:false,inactive:false}}),
      navigation.setParams({activeRoles:[],trueCount:null})
    }

    const [modalVisible,setModalVisible] = useState(false);
    const openModal = () => setModalVisible(true);
    const closeModal = () => setModalVisible(false);


    //trueCount for badge no of elements
    const trueCount = route.params?.trueCount || null;

    //activeStatus for array of active Status eg.[active,inactive]
    const activeStatus =   Object.keys(filter.status).filter(item=>filter.status[item]===true) || route.params?.activeStatus;

    //trueStatusCount is no of true's in status always 1
    const trueStatusCount = route.params?.trueStatusCount || Object.values(filter.status).filter(item => item === true).length;

    //activeRoles is array of current true roles
    const activeRoles = route.params?.activeRoles;

    //Total applied filters
    const totalFilters = trueStatusCount + trueCount

    console.log("Active Roles: "+activeRoles)
    // console.log("Type of Active Roles: "+typeof(activeRoles))
    // console.log("Selected Status: "+SelectedStatus)
    // console.log("Active Status: "+activeStatus)
    // console.log("Type of Active Status: "+typeof(activeStatus))
    // console.log("True Status Count: "+trueStatusCount)

  return (
  <View style={styles.container}>
    <View style={styles.filterContainer}>
        <Text style={styles.filterHeader}>
            Role
        </Text>
        { trueCount>0 && (
        <View style={styles.roleBadgeContainer}>
          <Text style={styles.badgeText}>{trueCount}</Text>
        </View>
        )}
        {
          totalFilters>0 && (
            <View style={styles.totalFilter}>
              <Text style={styles.totalFilterText}>{"Total Filters: " + totalFilters}</Text>
            </View>
          )
        }

        <View style={styles.btnContainer}>
            <TouchableOpacity 
              style={styles.roleBtn}
              onPress={()=>{navigation.navigate("Role",{activeStatus : activeStatus , trueStatusCount : trueStatusCount})}}
            >
                <View>
                    <Text style={styles.selectText}>
                        Select
                    </Text>
                </View>
                <View style={styles.arrowContainer}>
                    <Arrow name="greater-than" size={18} style={styles.arrow}/>
                </View>
            </TouchableOpacity>
        </View>

        {(
          <View style={styles.rolesContainer}>
          {activeRoles?.map((item,index) => (
                <View 
                  key={index} 
                  style={styles.roleItemsContainer}>
                <Text  
                  style={styles.rolesText}>
                  {item}
                </Text>
              </View>
              ))}
          </View>
        )}
    </View>

    <View style={styles.filterContainer}>
        <Text style={styles.filterHeader}>
            Status
        </Text>

        { trueStatusCount>0 && (
        <View style={styles.statusBadgeContainer}>
          <Text style={styles.badgeText}>{trueStatusCount}</Text>
        </View>
        )}

        <View style={styles.btnContainer}>
            <TouchableOpacity 
                style={styles.roleBtn}
                onPress={openModal}
            >
                <View>
                  <Text style={styles.selectText}>
                        Select
                  </Text>                  
                </View>
                <View style={styles.arrowContainer}>
                    <Arrow name="greater-than" size={18} style={styles.arrow}/>
                </View>
            </TouchableOpacity>
        </View>

          {trueStatusCount>0 && (
          <View style={styles.rolesContainer}>
          {activeStatus?.map((item,index) => (
                <View 
                  key={index} 
                  style={styles.showStatus}>
                <Text  
                  style={styles.statusText}>
                  {item}
                </Text>
              </View>
              ))}
          </View>
        )}

    </View>
        <View style={styles.bottomBtnContainer}>
          <View style={styles.btnWrap}>
            <TouchableOpacity 
              style={styles.clearBtn}
              onPress={clearFilter}
            >
              <Text style={styles.clearText}>
                Clear
              </Text>
            </TouchableOpacity>
            <TouchableOpacity 
              style={styles.applyBtn}
              onPress={()=>{navigation.navigate("All users",{filters : {
                status : activeStatus,
                roles : activeRoles
              }, trueCount:trueCount,trueStatusCount:trueStatusCount});
            }}
            >
              <Text style={styles.applyText}>
                Apply
              </Text>
            </TouchableOpacity>
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
                    onPress={()=>setFilter({...filter,status: {all :false,active:true,inactive:true}})}
                >
                {!filter.status.all ? <Circle name="circle" size={24}/> : <Check_Circle name="check-circle" size={24}/>}
                </TouchableOpacity>

                </View>
            </View>
            <View style={styles.modalBtnContainer}>
              <Text style={styles.modalText}>
                Active
              </Text>
              <View style={styles.radioBtn}>
                <TouchableOpacity
                    onPress={()=>setFilter({...filter,status: {all :false,active:true,inactive:false}})}
                >
                {!filter.status.active ? <Circle name="circle" size={24}/> : <Check_Circle name="check-circle" size={24}/>}
                </TouchableOpacity>

                </View>
            </View>
            <View style={styles.modalBtnContainer}>
              <Text style={styles.modalText}>
                Inactive
              </Text>
              <View style={styles.radioBtn}>
                <TouchableOpacity
                    onPress={()=>setFilter({...filter,status: {all :false,active:false,inactive:true}})}
                >
                {!filter.status.inactive ? <Circle name="circle" size={24}/> : <Check_Circle name="check-circle" size={24}/>}
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
    flex:1,
    padding:10,
    // marginTop:5
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
    fontWeight: '500',
    
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
    // marginTop:20,
    borderTopRightRadius:40,
    borderTopLeftRadius:40,
    backgroundColor: 'rgb(255, 255, 255)',
  },
  bottomBtnContainer : {
    position:'absolute',
    bottom:20,
    left:0,
    right:0,
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
    // position:'absolute',
    // top:350,
    // left :-10,
    backgroundColor : '#5f5e5e',
    padding : 15,
    borderRadius : 15,
    borderWidth:2,
    marginRight:50,
  },
  applyBtn : {
    // position:'absolute',
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
  roleBadgeContainer : {
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
  statusBadgeContainer:{
    position:'absolute',
    top: 10,
    left:80,
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
  },
  arrow : {

  },
  arrowContainer : {
    position:'absolute',
    left:350,
    top:10
  },
  showStatus : {
    backgroundColor:'#d3f7f7',
    borderRadius:20,
    marginTop: 10,
    padding:5,
    borderWidth:1
  },
   statusText : {
    fontSize:20,
    fontWeight:'700',
    marginLeft : 15,
  },
  rolesContainer : {

  },
  roleItemsContainer : {
    backgroundColor:'#d3f7f7',
    borderRadius:20,
    marginTop: 10,
    padding:5,
    borderWidth:1
  },
  rolesText : {
    fontSize:20,
    fontWeight:'700',
    marginLeft : 15,
  },
  totalFilter : {
    position : 'absolute',
    right:0,
    width:135,
    height:30,
    alignItems:'center',
    justifyContent:'center',
    backgroundColor: '#e2f512',
    borderRadius:30
  },
  totalFilterText : {
    fontSize:18,
    fontWeight:'900'
  }

})

export default Filters