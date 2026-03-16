import { View, FlatList,StatusBar} from 'react-native'
import React, { useEffect, useState } from 'react'
import {getAllUsers} from "../services/api";
import { useFocusEffect } from '@react-navigation/native';
import Searchbar from "../components/HomeScreen/Searchbar";
import FlatlistItems from "../components/HomeScreen/FlatlistItems";
import Floatingbtn from "../components/HomeScreen/Floatingbtn";
import Header from "../components/HomeScreen/Header";

const Home_Screen = ({ navigation }) => {

  // Get all users
  const [myData,setMyData] = useState([ ]);

  const loadUsers = async() => {
    const data = await getAllUsers();
    setMyData(data);
  }

    useFocusEffect(
    React.useCallback(() => {
      loadUsers();
      return () => {

      };
    }, [])
  );
  
  const[refreshing,setRefreshing]= useState(false);
  const onRefresh = async ()=> {
    setRefreshing(true);
    loadUsers();
    setRefreshing(false);
  };
  
  const [search,setSearch] = useState('');
  const filteredContacts = myData.filter(contact=>contact.name.toLowerCase().includes(search.toLowerCase()));

  return (
    <View > 
      <StatusBar hidden={true}/>
      <Header />
      <Searchbar search={search} setSearch={setSearch}/>

      <View style={{height: '88%', flexGrow: 0}}>
        <FlatList
          data={filteredContacts}
          renderItem={({item})=>(
          <FlatlistItems item={item} navigation={navigation} />
          )}
          keyExtractor={(item)=>item.id}
          refreshing={refreshing}
          onRefresh={onRefresh}
          ItemSeparatorComponent={<View style={{height:2,backgroundColor:'#999797'}}/>}
        />
      </View>
          
      <Floatingbtn navigation={navigation}/>
    </View>
  )
}

export default Home_Screen