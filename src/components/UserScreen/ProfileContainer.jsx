import { View, Text, StyleSheet, TouchableOpacity,Image } from 'react-native'
import React from 'react'
import { useRoute } from '@react-navigation/native';

const profileImage = "https://static.vecteezy.com/system/resources/thumbnails/035/857/779/small/people-face-avatar-icon-cartoon-character-png.png";

const ProfileContainer = () => {
  const route = useRoute();
  const user = route.params?.user;
  const mode = route.params?.mode;
  return (
<View style={styles.profileContainer}>
        <Image
          source = {mode==="edit"|| mode==="delete" ? {uri : user.avatar} : {uri : profileImage}}
          style = {styles.profileImage}
          // resizeMode = 'cover'
        />
        <TouchableOpacity style={styles.editPhotoBtn}>
          <Text style={{color: '#1e06f7', fontWeight:'bold',fontSize:18}}>
          Edit Photo
          </Text>
        </TouchableOpacity>

        <View style={{height:2,backgroundColor:'#b6b4b4',marginTop:10,marginLeft:20,marginRight:20}}/>
      </View>
  )
}

const styles = StyleSheet.create({
  profileContainer : {
      width: '100%',
      height: 210,
      justifyContent: 'center',
      backgroundColor: '#ffff'
  },
  profileImage : {
    // position: 'absolute',
    height : 120,
    width : 120,
    marginTop:10,
    // paddingTop: 30,
    backgroundColor: '#ffff',
    borderRadius: 60,
    marginLeft:'36%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  editPhotoBtn : {
     backgroundColor: '#ffff',
     height: 50,
     width:120,
     marginTop: 8,
     marginBottom: 10,
     marginLeft:'36%',
     justifyContent:'center',
     alignItems: 'center',
     padding:10,
     borderRadius:15,
     borderWidth: 1
  }
})

export default ProfileContainer