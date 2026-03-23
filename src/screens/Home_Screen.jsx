import { View, FlatList,StatusBar} from 'react-native'
import React, { useEffect, useState } from 'react'
import {getAllUsers} from "../services/api";
import { useFocusEffect } from '@react-navigation/native';
import FlatlistItems from "../components/HomeScreen/FlatlistItems";
import Floatingbtn from "../components/HomeScreen/Floatingbtn";
import Header from "../components/HomeScreen/Header";
import { useRoute } from '@react-navigation/native';
import EmptyState from '../components/HomeScreen/SubComponents/EmptyState';
import Loader from '../components/HomeScreen/SubComponents/Loader';

const Home_Screen = () => {
  const route = useRoute();
  const dataToFilter = route.params?.filters;

  const [filters,setFilters] = useState({
    status : [],
    roles : []
  });

  useEffect(()=>{
    if (dataToFilter) {
      setFilters(dataToFilter);
    }
  },[dataToFilter]);

  console.log("Data to filter"+dataToFilter)
  const [loader,setLoader] = useState(false);

  // Get all users
  const [myData,setMyData] = useState([ ]);

  const loadUsers = async()=>{
    try {
      setLoader(true);
      const data = await getAllUsers();
      setMyData(data);
    } catch (error) {
      console.log(error)
    } finally {
      setLoader(false);
    }
  }

    useFocusEffect(
    React.useCallback(() => {
      loadUsers();
      return () => {
        // loadUsers();
      };
    }, [])
  );
  
  const[refreshing,setRefreshing]= useState(false);
  const onRefresh = async ()=> {
    setRefreshing(true);
    await loadUsers();
    setRefreshing(false);
  };
  
  const [search,setSearch] = useState('');

  const finalData = myData.filter(item=>{
    //search filter
    const searchMatch = item.name.toLowerCase().includes(search.toLowerCase());
    //status filter
    const statusMatch = filters.status.length > 0
    ? filters.status.includes(item.status.label) : true ;
    //roles filter
    const roleMatch = filters.roles.length > 0 
    ? filters.roles.includes(item.role.label) : true ;

    return searchMatch && statusMatch && roleMatch
  });

  return (
    <View > 
      <StatusBar hidden={true}/>
      <Header search={search} setSearch={setSearch}/>
      {/* <Searchbar search={search} setSearch={setSearch}/> */}

      {loader? 
      <Loader/> 
      : finalData.length>0 ?  
      <View style={{height: '92%', flexGrow: 0}}>
        <FlatList
          // data={filteredContacts}
          data={finalData}
          renderItem={({item})=>(
          <FlatlistItems item={item} />
          )}
          keyExtractor={(item)=>item.id}
          refreshing={refreshing}
          onRefresh={onRefresh}
          ItemSeparatorComponent={<View style={{height:2,backgroundColor:'#999797'}}/>}
        />
      </View> 
      : 
      <View> 
        <EmptyState/> 
      </View>
      }       
      <Floatingbtn/>
    </View>
  )
}

export default Home_Screen