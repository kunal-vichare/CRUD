import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import TextTicker from 'react-native-text-ticker'
import { useNavigation } from '@react-navigation/native';
// import image from '../../../image/Decrease_3.jpg'
// const image = require('../../../image/Decrease_3.jpg');

const EmptyState = () => {
  const profileImage = require('../../../image/empty.jpg');
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
        <TextTicker
          style={styles.ticker}
          duration={8000}
          loop
          // bounce
          repeatSpacer={0}
          marqueeDelay={0}
        >
          No data found...!  Please clear the parameters to proceed...   
        </TextTicker>
        <Image
          source = {profileImage}
          style = {styles.profileImage}
          // resizeMode='resize'
        />
        <View style={styles.textBtnContainer}>
          <Text style={styles.headText}>No data found</Text>
          <TouchableOpacity 
            style={styles.btn}
            onPress={()=>navigation.goBack()}
          >
            <Text style={styles.clearText}>
              Clear Parameters
            </Text>
          </TouchableOpacity>
        </View>
    </View>
  )
}
const styles = StyleSheet.create({
  container : {
    // width:'100%',
    // flex:1,
    alignContent:'center',
    justifyContent:'center'
  },
  profileImage : {
    height : 400,
    width : 400,
    resizeMode: 'stretch',
    justifyContent: 'center',
    alignItems: 'center',
  },
  textBtnContainer : {
    // width:'100%',
    // alignContent:'center',
    // justifyContent:'center'
    justifyContent: 'center',
    alignItems: 'center',
  },
  headText : {
    fontWeight:'800',
    fontSize:25,
    marginBottom: 20
  },
  btn : {
    backgroundColor:'#737272',
    padding:10,
    borderRadius:20
  },
  clearText : {
    fontWeight:'500',
    fontSize:20,
    color:'#fff'
  },
  ticker : {
    fontSize:24,
    fontWeight:'600',
    color:'#f60909',
    backgroundColor:'#dadada',
    marginTop:80
  }
})

export default EmptyState