import React from 'react';
import {View, StyleSheet, Image, Text, Button, Pressable} from 'react-native';
import {NavigationContainer, NavigationProp} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from "../components/Home";
import Scan from "../components/Scan";
import ActionBarImage from "../components/ActionBarImage";

const Stack = createNativeStackNavigator();
const AppNavigator = () => (
    <NavigationContainer>
        <Stack.Navigator initialRouteName="HomeScreen">
            <Stack.Screen
                name="HomeScreen"
                component={Home}
                options={{
                    headerShown: false,
                }}
            />
            <Stack.Screen name="ScanScreen" component={Scan} options={{headerRight: () => <ActionBarImage/> }} />
        </Stack.Navigator>
    </NavigationContainer>
    );

export default AppNavigator;