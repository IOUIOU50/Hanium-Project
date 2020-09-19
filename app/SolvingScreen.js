
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

const Number = ({navigation,initValue, page}) => {
const [num, setNum] = useState(initValue);  

    return(
      <><View style = {styles.subcon} >
        <TouchableOpacity style = {styles.numbox} onPress = {() => navigation.navigate('Problem',{num : num})} ><Text style =  {styles.numtext }>{num}</Text></TouchableOpacity>
        <TouchableOpacity style = {styles.numbox} onPress = {() => navigation.navigate('Problem',{num : num+1})}><Text style = {styles.numtext}>{num+1}</Text></TouchableOpacity>
        <TouchableOpacity style = {styles.numbox} onPress = {() => navigation.navigate('Problem',{num : num+2})}><Text style = {styles.numtext}>{num+2}</Text></TouchableOpacity>
      </View>
      <View style = {styles.subcon} >
        <TouchableOpacity style = {styles.numbox} onPress = {() => navigation.navigate('Problem',{num : num+3})} ><Text style = {styles.numtext}>{num+3}</Text></TouchableOpacity>
        <TouchableOpacity style = {styles.numbox} onPress = {() => navigation.navigate('Problem',{num : num+4})}><Text style = {styles.numtext}>{num+4}</Text></TouchableOpacity>
        <TouchableOpacity style = {styles.numbox} onPress = {() => navigation.navigate('Problem',{num : num+5})}><Text style = {styles.numtext}>{num+5}</Text></TouchableOpacity>
      </View>
      <View style = {styles.subcon} >
        <TouchableOpacity style = {styles.numbox} onPress = {() => navigation.navigate('Problem',{num : num+6})}><Text style = {styles.numtext}>{num+6}</Text></TouchableOpacity>
        <TouchableOpacity style = {styles.numbox} onPress = {() => navigation.navigate('Problem',{num : num+7})}><Text style = {styles.numtext}>{num+7}</Text></TouchableOpacity>
        <TouchableOpacity style = {styles.numbox} onPress = {() => navigation.navigate('Problem',{num : num+8})}><Text style = {styles.numtext}>{num+8}</Text></TouchableOpacity>
      </View>
      <View style = {styles.subcon} >
        <TouchableOpacity style = {styles.numbox} onPress = {() => navigation.navigate('Problem',{num : num+9})} ><Text style = {styles.numtext}>{num+9}</Text></TouchableOpacity>
        <TouchableOpacity style = {styles.numbox} onPress = {() => navigation.navigate('Problem',{num : num+10})}><Text style = {styles.numtext}>{num+10}</Text></TouchableOpacity>
        <TouchableOpacity style = {styles.numbox} onPress = {() => navigation.navigate('Problem',{num : num+11})}><Text style = {styles.numtext}>{num+11}</Text></TouchableOpacity>
      </View>

      </>
    );
}
let screenWidth = Dimensions.get('window').width;
let screenHeight = Dimensions.get('window').height;

const SolvingScreen = ({navigation}) => {
    return(
      <View style = {styles.container}>

        <ScrollView horizontal = {true} pagingEnabled = {true}>

          <View style = {styles.contain}>
          <FontAwesome5 name = 'arrow-left' style = {styles.icon} onPress = {() => navigation.goBack()}/>
              <Number navigation = {navigation} initValue = {1} page = {1}/>
          </View>
          <View style = {styles.contain}>
          <FontAwesome5 name = 'arrow-left' style = {styles.icon} onPress = {() => navigation.goBack()}/>
              <Number navigation = {navigation} initValue = {13} page = {1}/>
          </View>
        </ScrollView>
        <Nav/>
      </View>
    );
}



const Nav = () => {
  return(
    <View style = {styles.navBtn}>
      <View style = {styles.current}></View>
      <View style = {styles.nav}></View>
      <View style = {styles.nav}></View>
    </View>
  );
}
const styles = StyleSheet.create({
  contain : {
    flex : 1,
    alignItems : 'center',
    width : screenWidth,
    height : screenHeight,
  },
  current : {
    borderRadius : 50,
    borderWidth : 2,
    marginLeft : 10,
    padding : 5,
    borderColor : '#fff',
    backgroundColor : '#fff'
  },
  icon : {
    position : 'absolute',
    color : '#fff',
    fontSize : 25,
    left : 30,
    top : 30,
  },
  container : {
    backgroundColor : '#36485f',
    flex : 1,
    alignItems : 'center',
    marginTop : -10,
    width : screenWidth,
    height : screenHeight
  },
  subcon : {
    marginTop : 40,
    flexDirection : 'row',
  },
  numbox : {
    borderWidth : 2,
    borderColor : '#fff',
    padding : 25,
    margin : 20,
    borderRadius : 20,
    width : 80,
    height : 80
  },
  numtext : {
    color : '#fff',
    textAlign : 'center',
    fontSize : 18
  },
  navBtn : {
    flexDirection : 'row',
    marginTop : 10
  },
  nav : {
    borderRadius : 50,
    borderWidth : 2,
    marginLeft : 10,
    padding : 5,
    borderColor : '#fff',
  }
});
export default SolvingScreen;