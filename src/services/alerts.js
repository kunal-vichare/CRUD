import {Alert } from 'react-native'

//Save Alert
export const showSaveAlert = () => {
    Alert.alert(
    'Confirmation',
    'Are you sure you want to save details',
    [
      {
      text : 'Cancel',
      onPress : ()=> console.log('Cancel'),
      style : 'cancel'
      },
      {
        text : 'OK',
        onPress : handleSubmit,
      }
    ],
    {cancelable:false}
  );
};

//Delete Alert
export const showDeleteAlert = () => {
  Alert.alert(
  'Confirmation',
  'Are you sure you want to Delete User',
  [
    {
      text : 'Cancel',
      onPress : ()=>console.log('Cancel'),
      style : 'cancel'
    },
    {
      text : 'OK',
      onPress : handleDelete
    }
  ],
  {cancelable:false}
  );
}

//Update Alert
export const showUpdateAlert = () => {
  Alert.alert(
  'Confirmation',
  'Are you sure you want to Update User',
  [
    {
      text : 'Cancel',
      onPress : ()=>console.log('Cancel'),
      style : 'cancel'
    },
    {
      text : 'OK',
      onPress : handleUpdate
    }
  ],
  {cancelable:false}
  );
};