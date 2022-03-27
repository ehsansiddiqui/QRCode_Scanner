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

    useEffect(() => {
        (async () => {
        try {
            const value = await AsyncStorage.multiGet(['qr_code']);
            alert("The value is:"+value)
            // @ts-ignore
            setText(value)
            if(value !== null) {
                // value previously stored

                alert("The value previously is:"+ value)
            }
        } catch(e) {
            // error reading value
            alert("The error is:"+ e)
        }
        })();
    }, []);

    return (

        <View>

            <Card>
                {/*react-native-elements Card*/}
                <Text style={styles.paragraph}>
                    {text}

                </Text>

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
        margin: 24,
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'center',
        color: '#34495e',
    },
});
