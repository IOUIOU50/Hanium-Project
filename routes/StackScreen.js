import 'react-native-gesture-handler';
import React, {Component} from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import SolvingScreen from '../app/SolvingScreen.js';
import LoginScreen from '../app/LoginScreen.js';
import RegisterScreen from '../app/RegisterScreen.js';
import MenuScreen from '../app/MenuScreen.js';
import ExplanationScreen from '../app/ExplanationScreen.js';

const RootStack = createStackNavigator();

const StackScreen = () => {
 return (
   <NavigationContainer>
     <RootStack.Navigator>
       <RootStack.Screen name="Login" component={LoginScreen} options={{ headerShown: false }}/>
       <RootStack.Screen name="Menu" component={MenuScreen} options={{ headerShown: false }}/>
       <RootStack.Screen name="Solve" component={SolvingScreen} options={{ headerShown: false }}/>
       <RootStack.Screen name="Register" component={RegisterScreen}
       options={{ headerShown: false }}/>
       <RootStack.Screen name="Problem" component={ExplanationScreen} options={{ headerShown: false }}/>
       <RootStack.Screen name="Explain" component={ExplanationScreen} options={{ headerShown: false }}/>
     </RootStack.Navigator>
   </NavigationContainer>
 );
};

export default StackScreen;
