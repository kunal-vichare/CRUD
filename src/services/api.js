import axios from 'axios';
import { Alert } from 'react-native';

//GET API
export const getAllUsers = async ()=> {
    try {
      const result = await axios.get('https://69a90cf832e2d46caf4509a9.mockapi.io/users');
      return result.data;
    } catch (error) {
      console.log(error)
    }
}

//POST API
export const postUser = async (data)=> {
  try {
    const result = await axios.post('https://69a90cf832e2d46caf4509a9.mockapi.io/users',data);
    Alert.alert('Success','Data Saved Successfully')
    return result.data;
  } catch (error) {
    console.log(error)
  }
}

//PATCH API
export const patchUser = async (id,data)=> {
  try {
    const result = await axios.patch(`https://69a90cf832e2d46caf4509a9.mockapi.io/users/${id}`,data);
    Alert.alert('Success','Data Updated Successfully');
    return result.data;
  } catch (error) {
    console.log(error)
    Alert.alert('Error','Failed to Update Data')
  }
}

//DELETE API
export const deleteUser = async (id)=> {
    try {
    const result = await axios.delete(`https://69a90cf832e2d46caf4509a9.mockapi.io/users/${id}`);
    Alert.alert('Success','Data Deleted Successfully');
    return result.data;
  } catch (error) {
    console.log(error)
  }
}