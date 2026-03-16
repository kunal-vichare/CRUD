import { View, Text, TouchableOpacity, StyleSheet ,Modal} from 'react-native'
import React,{ useState } from 'react'
// import React from 'react'
import Sort from 'react-native-vector-icons/FontAwesome';
import Filter from 'react-native-vector-icons/Ionicons';

const SortandFilter = () => {
  const[modalVisible,setModalVisible] = useState(false);
  return (
    <View style={styles.btnContainer}>
      <TouchableOpacity style={styles.sortBtn}>
        <Text style={styles.sortText}>Sort by</Text>
        <Sort name="unsorted" size={24}/>
      </TouchableOpacity>
      <TouchableOpacity 
        onPress={() => setModalVisible(true)}
        style={styles.filterBtn}
        >
        <Text style={styles.filterText}>Filter</Text>
        <Filter name="filter-sharp" size={24} />
      </TouchableOpacity>
      <Modal 
      visible={modalVisible}
      transparent={true}
      animationType='fade'
      onRequestClose={()=>setModalVisible(false)}
      >
        <View>
          <Text>This is modal</Text>
          <TouchableOpacity onPress={()=>setModalVisible(false)}>
            <Text>Close</Text>
          </TouchableOpacity>
        </View>
      </Modal>
    </View>
  )
}

const styles = StyleSheet.create({
  btnContainer : {
    flexDirection : 'row',
    // backgroundColor:'red',
    alignItems: 'center',
    justifyContent:'center'
  },
  sortText : {
    fontSize: 15,
    fontWeight: 'bold',
    marginRight:5
  },
  sortBtn : {
    flexDirection:'row',
    // backgroundColor: '#e1fcfc',
    marginRight: 5,
    marginTop: 10,
    marginBottom: 10,
  },
  filterText : {
    marginLeft : 10,
    fontSize: 15,
    fontWeight: 'bold',
    marginRight:5
  },
  filterBtn : {
     flexDirection:'row',
    //  backgroundColor:'#e1fcfc',
     marginTop: 10,
     marginBottom: 10,
  }
})

export default SortandFilter