import React from 'react';
import {View, StyleSheet, Image, Text, Button, Pressable} from 'react-native';
import icon from '../assets/code.png';
import {NavigationContainer, NavigationProp} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

interface HomeScreenProps {
    navigation: any;
}

const Home = (props : HomeScreenProps) => {
    const scanScreen = () => props.navigation.navigate('ScanScreen');
    return (
        <View style={styles.center} >
            <View>
            <Image source={icon} />
            </View>
            <View>
            <Button  title={"Scan QR Code"} onPress={scanScreen} />
        </View>
        </View>
    );
};
const styles = StyleSheet.create({
    header: {
        paddingVertical: 20,
        borderBottomWidth: 1,
        borderBottomColor: '#cfcfcf',
        alignItems: 'center',
    },
    center:{
        height: 500,
        display: "flex",
        alignItems:"center",
        justifyContent:"center",
    },
    headerText: {
        fontSize: 20,
        fontWeight: '600',
    },
    buttonQr: {
        width:256,
        height:48,
        left:59,
        backgroundColor:'#000000',
        borderRadius:24,
    },
});
export default Home;