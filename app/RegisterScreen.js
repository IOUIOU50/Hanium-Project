/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

 import 'react-native-gesture-handler';
 import React, {Component, useState} from 'react';
 import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';


import {
  StyleSheet,
  ScrollView,
  View,
  Text,
  TextInput,
  Dimensions,
  TouchableOpacity,
} from 'react-native';

const {width : WIDTH } = Dimensions.get('window')

const RegisterScreen = ({navigation}) => {

  const [id, setId] = useState('');
  const [pw, setPw] = useState('');
  const [email, setEmail] = useState('');

  const Register = () => {
    fetch(`http://13.125.125.38/Hanium/Register.php`,{
      method: 'POST',
      headers: {
        'Content-Type' : 'application/x-www-form-urlencoded'
      },
      body: "id="+id+"&pw="+pw+"&email="+email
    })
    .then((response) => response.text())
    .then((responseText) => {
      if(responseText){
        alert(responseText);
        navigation.navigate('Login');
      }else{
        alert(responseText);
      }
    }).catch((error) => {
      console.log(error);
    });
  }

    return (
      <View style = {styles.titleContainer}>
        <FontAwesome5 name = 'arrow-left' style = {styles.icon} onPress = {() => navigation.goBack()}/>

        <Text style = {styles.titleText}>회원가입</Text>
        <TextInput style = {styles.textinput} placeholder = "Username" placeholderTextColor = {'rgba(255,255,255,0.5)'} underlineColorAndroid = {'transparent'}
        onChangeText = {id => setId(id)}/>
        <TextInput style = {styles.textinput} placeholder = "Password" placeholderTextColor = {'rgba(255,255,255,0.5)'} secureTextEntry = {true} underlineColorAndroid = {'transparent'}
        onChangeText = {pw => setPw(pw)}/>
        <TextInput style = {styles.textinput} placeholder = "Email"  placeholderTextColor = {'rgba(255,255,255,0.5)'} underlineColorAndroid = {'transparent'}
        onChangeText = {email => setEmail(email)}/>

        <TouchableOpacity style = {styles.regbtn} onPress = {() => Register()}>
          <Text style = {styles.btnText}>가입</Text>
        </TouchableOpacity>
      </View>
    );
}




const styles = StyleSheet.create({
  icon : {
    position : 'absolute',
    color : '#fff',
    fontSize : 25,
    left : 30,
    top : 30,
  },

  textinput : {
    alignSelf : 'center',
    width : WIDTH - 100,
    height : 40,
    marginBottom : 30,
    borderBottomWidth : 1,
    borderBottomColor : 'white',
    fontSize : 15,
    color : 'white'
  },
  regbtn : {
    backgroundColor : '#59cbbd',
    padding : 20,
    width : WIDTH - 100,
  },
  btnText : {
    textAlign : 'center',
    color : '#fff',
    fontWeight : 'bold',
    fontSize : 18
  },
  titleContainer : {
    backgroundColor : '#36485f',
    alignSelf : 'stretch',
    flex : 1,
    justifyContent : 'center',
    alignItems : 'center'
  },
  titleText : {
    color : '#fff',
    fontSize : 30,
    fontWeight : 'bold',
    marginBottom : 20
  },
});

export default RegisterScreen;
