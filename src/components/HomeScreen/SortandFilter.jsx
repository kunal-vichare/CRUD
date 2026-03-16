import { View,Text, TouchableOpacity, StyleSheet} from 'react-native'
import React,{ useState } from 'react'
import Sort from 'react-native-vector-icons/FontAwesome';
import Filter from 'react-native-vector-icons/Ionicons';
import {Menu, Divider,Modal, Portal} from 'react-native-paper';
import { Dropdown } from 'react-native-paper-dropdown';

const SortandFilter = () => {
  const [upload, setUpload] = useState('');
  const [status, setStatus] = useState('');
  const [modalVisible,setModalVisible] = useState(false);
  const [visible, setVisible] = useState(false);

  const openModal = () => setModalVisible(true);
  const closeModal = () => setModalVisible(false);
  const openMenu = () => setVisible(true);
  const closeMenu = () => setVisible(false);

  const statusList = [
    { label: "Active", value: "active"},
    { label: "Inactive", value: "inactive"},
  ];
  const uploadList = [
    { label: "Anytime", value: "anytime"},
    { label: "Today", value: "today"},
    { label: "This week", value: "this week"},
    { label: "This month", value: "this month"},
    { label: "This year", value: "this year"},
  ];

  return (
    <View style={styles.btnContainer}>
        <Menu
          visible={visible}
          onDismiss={closeMenu}
          anchor={
            <TouchableOpacity 
            onPress={openMenu}
            style={styles.sortBtn}
            >
              <Text style={styles.sortText}>
                Sort by
              </Text>
              <Sort name="unsorted" size={24}/>
            </TouchableOpacity>
          }>         
          <Menu.Item onPress={() => {}} title="Name" />
          <Menu.Item onPress={() => {}} title="Time" />
        </Menu>

        <TouchableOpacity 
          onPress={openModal}
          style={styles.filterBtn}
        >
          <Text style={styles.filterText}>Filter</Text>
          <Filter name="filter-sharp" size={24} />
        </TouchableOpacity>

      <Portal>
        <Modal visible={modalVisible} onDismiss={closeModal} contentContainerStyle={styles.modalContainer}>
          <View style={styles.filterContainer}>
            <View style={styles.headerContainer}>
            <Text style={styles.filterHeader}>Search filters</Text>
            </View>
            <View style={styles.filterFieldsContainer}>
              <Text style={styles.filterText}>Status</Text>
              <View style={styles.dropdownContainer}>
                <Dropdown
                  placeholder="Select status"
                  options={statusList}
                  value={status}
                  onSelect={setStatus}
                  menuContentStyle={styles.menu}
                  style={styles.dropdown}
                />
              </View>
            </View>
            <View style={styles.filterFieldsContainer}>
              <Text style={styles.filterText}>Upload date</Text>
              <View style={styles.dropdownContainer}>
                <Dropdown
                  placeholder="Select upload date"
                  options={uploadList}
                  value={upload}
                  onSelect={setUpload}
                  menuContentStyle={styles.menu}
                  style={styles.dropdown}
                />
              </View>
            </View>
            <Divider style={{marginBottom : 20}}/>
              <View style={styles.filterFieldsContainer}>
              <TouchableOpacity style={styles.cancelBtn} onPress={closeModal}>
                <Text style={styles.cancelText}>Cancel</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.applyBtn}>
                <Text style={styles.applyText}>Apply</Text>
              </TouchableOpacity>
            </View>
          </View>
        </Modal>
      </Portal>
    </View>
  )
}

const styles = StyleSheet.create({
  btnContainer : {
    flexDirection : 'row',
    alignItems: 'center',
    justifyContent:'center'
  },
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
  modalContainer : {
    backgroundColor: 'white', 
    padding: 20,
  },
  filterContainer : {
    flexDirection: 'column',
  },
  filterFieldsContainer : {
    flexDirection : 'row',
    marginBottom : 45
  },

  filterHeader : {
    fontSize : 23,
    fontWeight : '600'
  },
  headerContainer : {
    marginBottom : 30
  },
  dropdownContainer : {
    position : 'absolute',
    left : 140,
    width:230,
  },
  menu : {

  },
  cancelBtn : {
    backgroundColor : '#fdc8c8',
    padding : 15,
    borderRadius : 15,
    marginLeft : 100,
    marginRight : 30,
  },
  applyBtn : {
    backgroundColor : '#c8f6fd',
    padding : 15,
    borderRadius : 15
  },
  cancelText : {
    fontSize : 15,
    fontWeight : 'bold'
  },
  applyText : {
    fontSize : 15,
    fontWeight : 'bold'
  },
  dropdown : {
    
  }
})

export default SortandFilter