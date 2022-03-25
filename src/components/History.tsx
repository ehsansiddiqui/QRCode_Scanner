import React from 'react';
import {View, StyleSheet, Image, Text, Button, Pressable} from 'react-native';
import {NavigationContainer, NavigationProp} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

interface HistoryScreenProps {
    navigation: any;
}

const History = (props : HistoryScreenProps) => {
    const scanScreen = () => props.navigation.navigate('ScanScreen');
    return (
        <View>

            <View>
                <Text>"History Activity"</Text>
            </View>
        </View>
    );
};
const styles = StyleSheet.create({

});
export default History;