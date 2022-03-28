import React from 'react';
import {View, StyleSheet, Image, Text, Button, Pressable, TouchableOpacity} from 'react-native';
import {color} from "react-native-elements/dist/helpers";

interface HomeScreenProps {
    navigation: any;
}

const Home = (props : HomeScreenProps) => {
    const scanScreen = () => props.navigation.navigate('ScanScreen');
    return (
        <View style={styles.center} >
            <View>
            <Image style={styles.qrImage} source={require('../assets/code.png')} />
                <Text style={styles.bottomText}>QR Code Scanner</Text>
            </View>
            <View>
                <TouchableOpacity style={styles.buttonQr}  onPress={scanScreen}>
                    <Text style={styles.buttonText}>Scan QR Code</Text>
                </TouchableOpacity>
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
        alignItems:"center",
        backgroundColor:'#000000',
        borderRadius:24,
        top:315,
    },
    buttonText:{
        color:"#fff",
        alignItems:'center',
        textAlign:'center',
        display:'flex',
        fontSize: 18,
        fontFamily:'Mulish',
        justifyContent:'center',
        top:9,

    },
    bottomText:{
        alignItems:'center',
        textAlign:'center',
        display:'flex',
        fontSize: 24,
        fontFamily:'Mulish',
        fontStyle:'normal',
        top: 110,
        fontWeight:"bold",
    },
    qrImage:{
        width: 200,
        height: 200,
        top:100,
    }
});
export default Home;