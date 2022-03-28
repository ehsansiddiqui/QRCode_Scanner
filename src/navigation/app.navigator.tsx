import React from 'react';
import {View, StyleSheet, Image, Text, Button, Pressable, TouchableOpacity, Alert} from 'react-native';
import {DefaultTheme, NavigationContainer, NavigationProp} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from "../components/Home";
import Scan from "../components/Scan";
import History from "../components/History";

const Stack = createNativeStackNavigator();
const MyTheme = {
    ...DefaultTheme,
    colors: {
        ...DefaultTheme.colors,
        primary: 'rgb(255, 45, 85)',
        background:'#fff'
    },
};
const AppNavigator = () => (
    <NavigationContainer theme={MyTheme}>
        <Stack.Navigator initialRouteName="HomeScreen">
            <Stack.Screen
                name="HomeScreen"
                component={Home}
                options={{
                    headerShown: false,
                }}

            />
            <Stack.Screen name="ScanScreen"  component={Scan} options={({ navigation }) => (
                {
                    title:" ",
                    headerShadowVisible: false,
                    headerRight: () => (
                    <TouchableOpacity onPress={()=>{
                        navigation.navigate('HistoryScreen');
                    }}>
                        <Image source={require("../assets/history.png")} style={styles.image}/>
                    </TouchableOpacity>

                ),
            }
            )
            } />
            <Stack.Screen
                name="HistoryScreen"
                component={History}
                options={{
                    title:" ",
                    headerShadowVisible: false
            }}
            />
        </Stack.Navigator>
    </NavigationContainer>
    );
const styles = StyleSheet.create({
    image: {
        width: 20,
        height: 20,
    },
});
export default AppNavigator;