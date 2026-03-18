import { View, TouchableOpacity,StyleSheet} from 'react-native'
import Plus from 'react-native-vector-icons/FontAwesome';

const Floatingbtn = ({navigation}) => {
  return (
      <View style={styles.floatingContainer}>
        <TouchableOpacity style={styles.floatingButton} onPress= {()=> navigation.navigate('Add_Edit_user',{mode : 'add'})}>       
          <Plus name="plus" 
          size={24} 
          style={styles.floatingText}/>       
        </TouchableOpacity>
      </View>
  )
}

const styles = StyleSheet.create({
    floatingButton : {
    position: 'absolute',
    height : 60,
    width : 60,
    backgroundColor: '#5259ef',
    borderRadius: 30,
    marginLeft:340,
    justifyContent: 'center',
    textAlign: 'center',
  },
  floatingText : {
    fontSize:35,
    color: '#fff',
    justifyContent: 'center',
    textAlign: 'center',
  },
  floatingContainer:{
    position:'absolute',
    // backgroundColor: '#fff',
    top: 825,
    left:2
  }
})

export default Floatingbtn