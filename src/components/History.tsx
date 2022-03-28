
import {connect} from 'react-redux';
import {GET_ALL_QRCODE_INFO_REQUEST} from "../redux/action";
import Home from "./Home";

import React, {useEffect, useState} from 'react';
import {View, StyleSheet, Image, Text, Button, Pressable} from 'react-native';
import {NavigationContainer, NavigationProp} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {Card} from "react-native-elements";
import AsyncStorage from '@react-native-async-storage/async-storage';

interface HistoryScreenProps {
    navigation: any;
}
export default function History(props : HistoryScreenProps) {
    const [text, setText] = useState('');
    const [timeText, setTimeText] = useState('');

    useEffect(() => {
        (async () => {
            try {
                const value = await AsyncStorage.getItem('qr_code');
                const timeValue = await AsyncStorage.getItem('time');
                if (value === null){
                    alert("Please Scan a QR Code!!!")
                }
                // @ts-ignore
                setText(value)
                // @ts-ignore
                setTimeText(timeValue)
                if(value !== null) {
                    // value previously stored

                    // alert("The value previously is:"+ value)
                }
            } catch(e) {
                // error reading value
                alert("The error is:"+ e)
            }
        })();
    }, []);



    return (

        <View>

            <Card containerStyle={styles.cardText}>
                {/*react-native-elements Card*/}
                <Text style={styles.paragraph}>
                    {text}

                </Text>
                <Text style={styles.timeText}>{timeText}</Text>

            </Card>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: 40,
        backgroundColor: '#ecf0f1',
    },
    paragraph: {
        fontSize: 16,
        fontWeight: 'bold',
        textAlign: 'center',
        color: '#263238',
    },
    cardText:{
        backgroundColor: '#F0F0F0',
        borderRadius:8,
    },
    timeText:{
        color: '#263238',
    }
});

// const mapStateToProps = (state, props) => {
//     const {type, data, time} = state.redux;
//
//     return {type, data, time};
// };
//
// const mapDispatchToProps = (dispatch, props) => ({
//     getAllUserInfo: () => {
//         dispatch({
//             type: GET_ALL_QRCODE_INFO_REQUEST,
//             payload: {},
//         });
//     },
// });

//
// const mapStateToProps = (state, props) => {
//     const {type, data, time} = state.redux;
//
//     return {type, data, time};
// };
//
// const mapDispatchToProps = (dispatch, props) => ({
//     getAllUserInfo: () => {
//         dispatch({
//             type: GET_ALL_QRCODE_INFO_REQUEST,
//             payload: {},
//         });
//     },
// });
//
//
// const HistoryView = ({type,data,time, getAllUserInfo, navigation}) => {
//     // navigation.navigate('Login')
//
//     useEffect(() => {
//         getAllUserInfo();
//     }, [getAllUserInfo]);
//
//     return (
//         <View>
//             <Text>{type}</Text>
//             <Text>{data}</Text>
//             <Text>{time}</Text>
//         </View>
//     );
// };
//
// const History = connect(
//     mapStateToProps,
//     mapDispatchToProps,
// )(HistoryView);
//
// export default History;