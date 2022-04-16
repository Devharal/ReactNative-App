import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import LoginScreen from './Components/Screens/LoginScreen'
import LoadingScreen from './Components/Screens/LoadingScreen'
import DashboardScreen from './Components/Screens/DashboardScreen'
import {NavigationContainer} from '@react-navigation/native'
import {createStackNavigator} from '@react-navigation/stack'

// Connecting to firebase

import * as firebase from 'firebase'
import {firebaseConfig} from './config'

firebase.initializeApp(firebaseConfig)


const Stack = createStackNavigator()

export default function App(){
  return(
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen component={LoadingScreen} name="LoadingScreen" options={{headerShown: false}}/>
        <Stack.Screen component={LoginScreen} name="LoginScreen" options={{headerShown: false}}/>
        <Stack.Screen component={DashboardScreen} name="DashboardScreen" options={{headerShown: false}} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}