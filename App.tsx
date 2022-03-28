import { StyleSheet, Text, View, Button } from 'react-native';
import React, { useState, useEffect } from 'react';
import AppNavigator from './src/navigation/app.navigator';
import {DefaultTheme} from "@react-navigation/native";


const App = () => {

  return (

      <AppNavigator />

        )
}

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
