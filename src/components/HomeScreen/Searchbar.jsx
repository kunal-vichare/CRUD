import { View, StyleSheet, TextInput} from 'react-native'
import React, {useState } from 'react'
import SortandFilter from './SortandFilter';
import Search from 'react-native-vector-icons/Feather';

const Searchbar = ({search,setSearch}) => {
  return (
      <View style={styles.searchBar}>  
            <TextInput
                placeholder='Search users'
                placeholderTextColor={"#474646"}
                value={search}
                onChangeText={setSearch}
                style= {styles.search}
            />
            <Search name="search" size={24} style={styles.searchIcon}/>
            <SortandFilter/>
      </View>
  )
}

const styles = StyleSheet.create({
    search : {
        borderColor : 'black',
        borderWidth: 1,
        borderRadius: 10,
        paddingLeft :40,
        marginTop: 10,
        marginBottom: 10,
        // backgroundColor : '#e1fcfc',
        marginRight: 12,
        width:'55%',
    },
    searchBar : {
        // position: 'relative',
        flexDirection:'row',
        backgroundColor: '#fff',
        marginLeft:15,
        // marginRight:15,
        // alignItems:'center',
    },
        searchIcon : {
        position :'absolute', 
        marginTop:18,
        marginLeft:10,
    },
})

export default Searchbar