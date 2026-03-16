import { View, StatusBar } from 'react-native'
import React,{ useState } from 'react'
import { useRoute } from '@react-navigation/native';
import ButtonContainer from '../components/UserScreen/ButtonContainer';
import ProfileContainer from '../components/UserScreen/ProfileContainer';
import FormContainer from '../components/UserScreen/FormContainer';
import DynamicButton from '../components/UserScreen/DynamicButton';

const Add_Edit_user = () => {
      const route = useRoute();
      const user = route.params?.user;
      
      const [formData,setFormData] = useState({
          id: user?.id || '',
          name: user?.name || '',
          email: user?.email ||'',
          role: user?.role ||'',
          phone: user?.phone ||'',
          status: user?.status ||''
      });
  
  return (    
    <View style={{justifyContent:'center',
    backgroundColor:'#f0f0f0'}}>
      <StatusBar hidden={true} />
      <ButtonContainer
        formData={formData}
        setFormData={setFormData}
      />
      <ProfileContainer/>
      <FormContainer
        formData={formData}
        setFormData={setFormData}
      />
      <DynamicButton
        formData={formData}
        setFormData={setFormData}
      />
    </View>
  )
};
export default Add_Edit_user