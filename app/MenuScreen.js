import 'react-native-gesture-handler';
import React, { Component } from 'react';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import AsyncStorage from '@react-native-community/async-storage';
import { url } from './config.js';
import {
  StyleSheet,
  View,
  Text,
  Dimensions,
} from 'react-native';



const { width: WIDTH } = Dimensions.get('window')

const MenuScreen = ({ navigation }) => {

  const GetData = async () => {
    const id = await AsyncStorage.getItem('Id');

    fetch(`http://${url}/Hanium/search.php`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      body: "userName=" + id
    })
      .then((response) => response.json())
      .then((responseJson) => {
        let id = responseJson[0].user_id;
        let problemNumber = new Array();
        for (let i = 0; i < responseJson.length; i++) {
          problemNumber[i] = responseJson[i].problem_id + "  ";
        }
        navigation.navigate('MyPage', { id: id, number: problemNumber })
      }).catch((error) => {
        alert(error);
      });
  }

  return (
    <View style={styles.menuContainer}>
      <FontAwesome5 name='arrow-left' style={styles.icon} onPress={() => navigation.goBack()} />
      <View style={styles.temp}>
        <View style={styles.menu} >
          <Text style={styles.menuTitle} onPress={() => navigation.navigate('Solve')}>
            문제풀기
                    <FontAwesome5 name='graduation-cap' style={styles.icons} />
          </Text>
        </View>
        <View style={styles.menu}>
          <Text style={styles.menuTitle}>문의
                    <Text>          </Text>
            <FontAwesome5 name='book' style={styles.icons} />
          </Text>
        </View>
      </View>
      <View style={styles.temp}>
        <View style={styles.menu}>
          <Text style={styles.menuTitle} onPress={() => GetData()}>PVP
                  <Text>      </Text>
            <FontAwesome5 name='wifi' style={styles.icons} />
          </Text>
        </View>
        <View style={styles.menu}>
          <Text style={styles.menuTitle} onPress={() => GetData()}>
            마이페이지
                  <Text>      </Text>
            <FontAwesome5 name='user' style={styles.icons} />
          </Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  icons: {
    fontSize: 50,
    color: 'orange'
  },
  icon: {
    position: 'absolute',
    color: '#fff',
    fontSize: 25,
    left: 30,
    top: 30,
  },
  menuContainer: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#36485f',
  },
  menu: {
    borderWidth: 2,
    borderColor: '#fff',
    width: 150,
    height: 150,
    borderRadius: 20,
    margin: 20,
  },
  temp: {
    flexDirection: 'row',
  },
  menuTitle: {
    flex: 1,
    textAlign: 'center',
    fontWeight: 'bold',
    color: '#fff',
    fontSize: 25,
    marginTop: 40,
  },
});

export default MenuScreen;
