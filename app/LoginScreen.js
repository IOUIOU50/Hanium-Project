import 'react-native-gesture-handler';
import React, { Component, useState } from 'react';
import AsyncStorage from '@react-native-community/async-storage';
import { url } from './config.js';

import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
} from 'react-native';

const { width: WIDTH } = Dimensions.get('window');

const LoginScreen = ({ navigation, }) => {
  const [id, setId] = useState('');
  const [pw, setPw] = useState('');

  const goRegister = (e) => {
    navigation.navigate('Register');
  };

  const Login = () => {
    fetch(`http://${url}/Hanium/login.php`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      body: "userName=" + id + "&password=" + pw
    })
      .then((response) => response.text())
      .then((responseText) => {
        if (responseText == 1) {
          SaveData(id);
          navigation.navigate('Menu')
        } else {
          alert(responseText);
        }
      }).catch((error) => {
        console.log(error);
      });
  }

  const SaveData = async (id) => {
    await AsyncStorage.setItem('Id', id);
  }

  return (
    <View style={styles.titleContainer}>
      <Text style={styles.titleText}>Login</Text>
      <View style={styles.border}>
        <TextInput
          style={styles.input}
          placeholder={'ID'}
          placeholderTextColor={'rgba(255,255,255,1)'}
          underlineColorAndroid='transparent'
          onChangeText={id => setId(id)}
        />
      </View>
      <View style={styles.border}>
        <TextInput style={styles.input}
          placeholder={'Password'}
          secureTextEntry={true}
          placeholderTextColor={'rgba(255,255,255,1)'}
          underlineColorAndroid='transparent'
          onChangeText={pw => setPw(pw)}
        />
      </View>
      <View style={styles.btn}>
        <TouchableOpacity style={styles.loginBtn} onPress={() => Login()}>
          <Text style={styles.loginTextBtn}>login</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.loginBtn} onPress={goRegister}>
          <Text style={styles.loginTextBtn}>Register</Text>
        </TouchableOpacity>
      </View>

    </View>
  );
}
const styles = StyleSheet.create({
  titleContainer: {
    backgroundColor: 'white',
    alignSelf: 'stretch',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  titleText: {
    color: '#fff',
    fontSize: 30,
    fontWeight: 'bold',
  },
  input: {
    marginTop: 20,
    width: WIDTH - 50,
    borderColor: '#fff',
    borderWidth: 1,
    color: 'white',
    borderRadius: 25,
    fontSize: 16,
    paddingLeft: 45,
    opacity: 0.7
  },
  loginBtn: {
    marginTop: 20,
    marginLeft: 20,
    marginRight: 20,
    width: 100,
    paddingTop: 20,
    paddingBottom: 20,
    backgroundColor: 'powderblue',
    borderRadius: 25,
    color: 'white',
    opacity: 0.7
  },
  loginTextBtn: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: 18,
  },
  btn: {
    flexDirection: 'row'
  }
});
export default LoginScreen;
