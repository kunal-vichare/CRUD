import { View, Text,ActivityIndicator,StyleSheet} from 'react-native'
import {SafeAreaView, SafeAreaProvider} from 'react-native-safe-area-context';
import React from 'react'

const Loader = () => {
  return (
      <View style={styles.container}>
        <ActivityIndicator size={100} color={'blue'}/>
        <Text style={styles.loadingText}>
          Loading...
        </Text>
      </View>
  )
}
const styles = StyleSheet.create({
  container: {
    // flex: 1,
    // position:'absolute',
    left:0,
    right:0,
    top:130,
    bottom:0,
    // backfaceVisibility:'visible',
    justifyContent: 'center',
    alignItems:'center'
  },
  loaderContainer : {
    width:220,
    height:220,
    backgroundColor:'rgba(0,0,0,0.2)',
    borderRadius:12,
    justifyContent:'center',
    alignItems:'center',
    shadowColor:'#000',
    elevation:100,
  },
  loadingText:{
    marginTop:20,
    fontSize:21,
    color:'#000',
    fontWeight:'600'
  }
});
export default Loader