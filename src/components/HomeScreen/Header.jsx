import { View, Text, TouchableOpacity, StyleSheet,TextInput, TouchableHighlight } from 'react-native'
import React, { useState } from 'react'
import { useNavigation } from '@react-navigation/native';
import Filter from 'react-native-vector-icons/Feather';
import Search from 'react-native-vector-icons/Feather';
import Add from 'react-native-vector-icons/Feather';
import Close from 'react-native-vector-icons/Fontisto';
import { Divider } from 'react-native-paper';
import { useRoute } from '@react-navigation/native';

const Header = ({search,setSearch}) => {
    const [showSearch,setShowSearch] = useState(false);
    const navigation = useNavigation();
    const route = useRoute();
    const trueCount = route.params?.trueCount;
    const trueStatusCount = route.params?.trueStatusCount;
    console.log("truecount"+trueCount);
    console.log("trueStatuscount"+trueStatusCount)
  return (
    <View>
        <View style={styles.container}>
            <View style={styles.textContainer}>
                <Text style={styles.userText}>User</Text>
                <Text style={styles.viewAllText}>View All</Text>
            </View>
            <View style={styles.btnContainer}>
                
                { trueCount+trueStatusCount>0 && (
                <View style={styles.badgeContainer}>
                    <Text style={styles.badgeText}>{trueCount+trueStatusCount}</Text>
                </View>
                )}
                
                <TouchableOpacity 
                    style= {!trueCount>0 ? styles.inactiveFilterBtn : styles.activeFilterBtn}
                    onPress={()=>{navigation.navigate("Filters")}}
                >
                    <Filter name="filter" size={30} />
                </TouchableOpacity>
                <Text style={styles.divider}>|</Text>
                <TouchableOpacity 
                    style= {!showSearch ? styles.inactiveSearchBtn : styles.activeSearchBtn }
                    onPress={()=>setShowSearch(!showSearch)}
                >
                    <Search name="search" size={30} />
                </TouchableOpacity>
                <Text style={styles.divider}>|</Text>
                <TouchableHighlight 
                    underlayColor={'#628fff'}
                    style={styles.addBtn}
                    onPress={()=> navigation.navigate('Add_Edit_user',{mode : 'add'})}
                    // onPress={()=> navigation.navigate('Loader',{mode : 'add'})}
                >
                    <Add name="plus-circle" size={30} />
                </TouchableHighlight>
            </View>
        </View>
        <Divider style={{height:2,marginTop:10}}/>
        {showSearch && 
            <View style={styles.searchBar}>
            <TextInput
                placeholder='Search users'
                placeholderTextColor={"#474646"}
                value={search}
                onChangeText={setSearch}
                style= {styles.search}
            />
            <Search name="search" size={24} style={styles.searchIcon}/>
            <TouchableOpacity 
            style={styles.closeContainer}
            onPress={
                ()=>{setShowSearch(false);setSearch("")}
                }>
                <Close name="close" size={35} />
            </TouchableOpacity>
            </View>
        }
    </View>
  )
}

const styles = StyleSheet.create({
    container : {
        flexDirection:'row',
        alignItems:'center'
    },
    btnContainer : {
        flex : 1,
        justifyContent: 'flex-end',
        flexDirection: 'row',
    },
    textContainer : {
        flexDirection : 'column',
        marginLeft : 22,
    },
    userText : {
        fontSize:20,
        fontWeight:'800'
    },
    viewAllText : {
        fontSize:15,
        fontWeight:'500'
    },
    inactiveFilterBtn : {
        padding:5,
        marginRight: 5
    },
        activeFilterBtn : {
        padding:5,
        marginRight: 5,
        backgroundColor:'#628fff',
        borderRadius:20
    },
    inactiveSearchBtn : {
        padding:5,
        marginRight: 5
    },
    activeSearchBtn : {
        padding:5,
        marginRight: 5,
        backgroundColor:'#628fff',
        borderRadius:20
    },

    addBtn : {
        padding:5,
        marginRight: 5,
        backgroundColor:'#fff',
        // backgroundColor:'#628fff',
        borderRadius:20,
    },
    divider : {
        marginRight: 5,
        fontSize: 25,
        fontWeight : '900'
    },
        search : {
        borderColor : 'black',
        borderWidth: 1,
        borderRadius: 10,
        paddingLeft :40,
        marginTop: 10,
        marginBottom: 10,
        // backgroundColor : '#e1fcfc',
        marginRight: 12,
        width:'85%',
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
        closeContainer : {
            marginTop:12
        },
    badgeContainer : {
    position:'absolute',
    zIndex:1,
    top: -2,
    left:165,
    backgroundColor:'#f707cb',
    height:25,
    width:25,
    alignItems:'center',
    justifyContent:'center',
    borderRadius:15,
  },
  badgeText : {
    fontSize : 15,
    fontWeight:'700',
    color: '#fff'
  }

})

export default Header