import { StyleSheet, Text, View, Button } from 'react-native';
import React, { useState, useEffect } from 'react';
import AppNavigator from './src/navigation/app.navigator';
import {DefaultTheme} from "@react-navigation/native";
import {Provider} from "react-redux";
import {store} from "./store";


const App = () => {

  return (
      <Provider store={store}>
            <AppNavigator />
      </Provider>
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
