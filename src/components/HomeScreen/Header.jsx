import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import Filter from 'react-native-vector-icons/Feather';
import Search from 'react-native-vector-icons/Feather';

const Header = () => {
  return (
    <View style={{flexDirection:'row'}}>
        <View>
            <Text>User</Text>
            <Text>View All</Text>
        </View>
        <View style={{flexDirection:'row'}}>
        <TouchableOpacity>
            <Filter name="filter" size={20} />
        </TouchableOpacity>
        <Text>|</Text>
        <TouchableOpacity>
            <Search name="search" size={20} />
        </TouchableOpacity>
        </View>
    </View>
  )
}

export default Header