/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React, {useEffect, useState} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View, Button,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import SplashScreen from 'react-native-splash-screen';
import Home from "./src/components/Home";
import Scan from "./src/components/Scan"
import { NavigationContainer } from '@react-navigation/native';
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import AppNavigator from "./src/navigation/app.navigator";




const App = () => {

  useEffect(() => {
    SplashScreen.hide();
  },[]);

  const backgroundStyle = {
    backgroundColor: Colors.white,
  };
  const Stack = createNativeStackNavigator();
  const [count, setCount] =  useState(0);
  return (


        <AppNavigator/>

  );
};





const styles = StyleSheet.create({
    container:{
        alignItems:"center",
        justifyContent:"center",
        flex: 1,
      backgroundColor: Colors.white,
    }
});

export default App;
