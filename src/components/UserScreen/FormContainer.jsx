import { View, Text, TextInput, StyleSheet} from 'react-native'
import React,{useState} from 'react'
import { Dropdown } from 'react-native-element-dropdown';

const FormContainer = ({formData,setFormData}) => {  

    const[errors,setErrors] = useState({});

    const validateField=(field,value)=>{
      let newError = "";

      const nameRegex = /(^[A-Za-z]{3,16})([ ]{0,1})([A-Za-z]{3,16})?([ ]{0,1})?([A-Za-z]{3,16})?([ ]{0,1})?([A-Za-z]{3,16})/;

      const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

      const phoneRegex = /^\+?[1-9][0-9]{7,14}$/;

      if(field=="name"){
        if (!nameRegex.test(value)) {
          newError = "Please enter valid fullname";          
        }
      }

        if(field=="email"){
        if (!emailRegex.test(value)) {
          newError = "Please enter valid email";          
        }
      }

        if (field=="phone") {
          if (!phoneRegex.test(value)) {
            newError = "Please enter valid mobile number";
          }
        }

      setErrors(prev=>({
        ...prev,
        [field] : newError
      }))
    }

    const data = [
    {label: 'manager',value: 1},
    {label: 'admin',value: 2},
    {label: 'user',value: 3},
    {label: 'ceo',value: 4},
    {label: 'director',value: 5}
    ];

    const status = [
    {label: 'active',value : 1},
    {label:'inactive',value : 2},
    ];

    const handleInput = (field,value) => {
    setFormData({...formData,[field] :value});
    validateField(field,value);
    }

  return (
    <View style={styles.formContainer}>
      <View>
        <Text style={styles.heading}>Full Name</Text>
         <TextInput 
          style={styles.input}
          placeholder='Enter Name'
          value={formData.name}
          onChangeText={(value)=>handleInput('name',value)}
         />
         {errors.name ? <Text style={styles.errorMsg}>{errors.name}</Text> : null}
      </View>

      <View>
        <Text style={styles.heading}>Email</Text>
        <TextInput 
          style={styles.input}
          placeholder='Enter Email'
          value={formData.email}
          onChangeText={(value)=>handleInput('email',value)}
        />
        {errors.email ? <Text style={styles.errorMsg}>{errors.email}</Text> : null}
      </View>

      <View>
        <View style={styles.roleDropdown}>
          <Text style={styles.heading}>Role</Text>
          <View style={{width:200, marginLeft:140}}>
            <Dropdown   
              style={styles.input}
              data = {data}
              labelField="label"
              valueField="value"
              value={formData.role}
              onChange={(value)=>handleInput('role',value)}
            />
          </View>
        </View>
      </View>

      <View style= {styles.mobileDropdown}>
        <Text style={styles.heading}>Phone Number</Text>
        <View style={{width:200, marginLeft:47}}>
          <TextInput
            style={styles.input}
            placeholder='Enter Mobile Number'
            value={formData.phone}
            onChangeText={(value)=>handleInput('phone',value)}
            keyboardType='number'
          />
          {errors.phone ? <Text style={styles.errorMsg}>{errors.phone}</Text> : null}
        </View>
      </View>

      <View>
        <View style={styles.statusDropdown}>
          <Text style={styles.heading}>Status</Text>
          <View style={{width:200, marginLeft:123}}>
            <Dropdown
              style={styles.input}
              data = {status}
              labelField="label"
              valueField="value"
              value={formData.status}
              onChange={(value)=>handleInput('status',value)}
            />
          </View>
        </View>
      </View>
      <View style={{height:2,backgroundColor:'#b6b4b4',marginTop:10,marginLeft:5,marginRight:5}}/>
    </View>
  )
}
const styles = StyleSheet.create({
  formContainer : {
    padding:15, 
    backgroundColor: '#fff'
  },
  heading:{
    fontSize : 20,
    fontWeight: '500',
    marginBottom:10,
    paddingTop : 5,
    textAlign : 'left',
  },
  input:{
    height:45,
    borderColor: '#919090',
    borderWidth: 2,
    marginBottom: 15,
    paddingHorizontal: 15,
    borderRadius:10,
    backgroundColor: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
  },
  roleDropdown : {
    flexDirection:'row'
  },
  mobileDropdown : {
    flexDirection:'row'
  },
  statusDropdown : {
    flexDirection:'row'
  },
  errorMsg : {
    color : 'red',
    marginBottom: 5,
  }
})
export default FormContainer