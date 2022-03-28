import {takeEvery, put} from 'redux-saga/effects';
import React from 'react';
import AsyncStorage from "@react-native-async-storage/async-storage";
import {useEffect, useState} from "react";
import {GET_ALL_QRCODE_INFO_REQUEST, GET_ALL_QRCODE_INFO_REQUEST_SUCCESS} from "./action";
import moment from "moment";

function* handler() {
    yield takeEvery(GET_ALL_QRCODE_INFO_REQUEST, getAllUserInfo);
}
function CategoryCard (props) {
    const [check, setCheck] = React.useState("");
    (async () => {
        try {
            const value = await AsyncStorage.getItem('qr_code');
            const timeValue = await AsyncStorage.getItem('time');
            if (value === null){
                alert("Please Scan a QR Code!!!")
            }
            setCheck(value);
            if(value !== null) {
                // value previously stored
            }
        } catch(e) {
            // error reading value
            alert("The error is:"+ e)
        }
    })();
}
const displayData = async ()=>{
    try{
        const value = await AsyncStorage.getItem('qr_code');
        if (value === null){
            alert("Please Scan a QR Code!!!")
        }
        if(value !== null) {
            // value previously stored
        }
        return value
    }
    catch(error){
        alert(error)
    }
}



function* getAllUserInfo(action) {

    try {
        // API call

        yield put({
            type: GET_ALL_QRCODE_INFO_REQUEST_SUCCESS,
            payload: {
                type: 'id1',
                data: displayData().value,
                time: "12-12-12",
            },
        });
    } catch (err) {
        // Handle error
    }
}


export {handler};