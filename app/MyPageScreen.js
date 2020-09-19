
 import 'react-native-gesture-handler';
 import React, {Component, useState} from 'react';
 import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
 import AsyncStorage from '@react-native-community/async-storage';

import {
  StyleSheet,
  ScrollView,
  View,
  Text,
  TextInput,
  Dimensions,
  TouchableOpacity,
  Image
} from 'react-native';

let screenWidth = Dimensions.get('window').width;
let screenHeight = Dimensions.get('window').height;


const Array = (number) =>{
  return number.map(element => {
    return (
      <Text>element</Text>
    );
  });
};

const MyPageScreen = ({route, navigation}) => {
  const {id} = route.params;
  const {number} = route.params;
    return(
      <View style = {styles.container}>
        <FontAwesome5 name = 'arrow-left' style = {styles.icon} onPress = {() => navigation.goBack()}/>
        <View style = {styles.contain}>
          <Text style = {styles.text}>{id} 님의 맞은 번호</Text>
        </View>
        <View style = {styles.number}>
          <Text style = {styles.correct}>{number}</Text>
        </View>
        <View style = {styles.contain}>
          <Text style = {styles.text}>{id} 님의 틀린 번호</Text>
        </View>
        <View style = {styles.number}>
          <Text style = {styles.correct}>{number}</Text>
        </View>
      </View>
    );
}



const styles = StyleSheet.create({
  number : {
    borderWidth : 2,
    borderColor : 'white',
    padding : 10,
    borderRadius : 10,
    marginTop : 20,
    width : screenWidth-50,
  },
  container : {
    flex : 1,
    flexDirection : 'column',
    alignItems : 'center',
    justifyContent : 'center',
    backgroundColor : '#36485f',
  },
  title : {
    color : 'white',
    fontWeight : 'bold',
    textAlign : 'center'
  },
  icon : {
    position : 'absolute',
    color : '#fff',
    fontSize : 25,
    left : 30,
    top : 30,
  },
  contain : {
    alignItems : 'center',
    marginTop : 40,
  },
  text : {
    fontWeight : 'bold',
    fontSize : 30,
    color : 'white'
  },
  correct : {
    color : '#3ba12feb',
    fontWeight : 'bold',
    fontSize : 25
  }

});

export default MyPageScreen;
