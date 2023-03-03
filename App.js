import { StyleSheet,View} from 'react-native';
import React, { Component } from 'react';
import {NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from '@react-navigation/stack';

import Login from './Login';
import Signup from './Signup';
import Add from './src/screens/Add';
import Payment from "./src/screens/Payment";
import Online from './src/screens/Online';
import Woman from './Woman';
import Preview from "./Preview";


const stack = createStackNavigator()

export default function App() {
  return (
    <NavigationContainer>

      <stack.Navigator initialRouteName='OnlineShopping' screenOptions={{header: ()=> null}}>
        <stack.Screen name='OnlineShopping' component={Online} />
        <stack.Screen name='AddToCart' component={Add} />
        <stack.Screen name='PaymentSucessfull' component={Payment} />
      </stack.Navigator>

      </NavigationContainer>
  )
}


