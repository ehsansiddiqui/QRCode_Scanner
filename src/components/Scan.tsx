import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';
import React, { useState, useEffect } from 'react';
import { BarCodeScanner, BarCodeScannedCallback } from 'expo-barcode-scanner';
import AsyncStorage from '@react-native-async-storage/async-storage';
import moment from "moment";

export default function ScanScreen() {
  const [hasPermission, setHasPermission] = useState<boolean>(false);
  const [scanned, setScanned] = useState(false);
  const [text, setText] = useState('');
  const [qrText, setqrText] = useState('');
  const [currentDate, setCurrentDate] = useState('');


  const askForCameraPermission = () => {
    (async () => {
      const { status } = await BarCodeScanner.requestPermissionsAsync();
      setHasPermission(status === 'granted');
    })()
  }

  useEffect(() => {
    askForCameraPermission();
    let date = moment()
        .utcOffset('+02:00')
        .format('HH:mm:ss DD-MM-YYYY');
    setCurrentDate(date);
  }, []);

  const handleBarCodeScanned: BarCodeScannedCallback = ({ type, data }) => {
    setScanned(true);
    // alert(`Bar code with type ${type} and data ${data} has been scanned!`);
    storeData(type,data);
    setText(data)
    setqrText("QR Code Data is:")
  };

  if (hasPermission === null) {
    return <Text>Requesting for camera permission</Text>;
  }
  if (hasPermission === false) {
    return (
        <View style={styles.container}>
          <Text style={{ margin: 10 }}>No access to camera</Text>
          <Button title={'Allow Camera'} onPress={() => askForCameraPermission()} />
        </View>)
  }

  const storeData = async (type:any,value:any) => {
    try {
      const jsonValue = JSON.stringify(value)
      await AsyncStorage.multiSet([['qr_code',jsonValue]]);
      await AsyncStorage.setItem("time",currentDate);

    } catch (e) {
      alert("Error is :"+ e)
    }
  }

  return (
    <View style={styles.container}>
      <View style={styles.barcodebox}>
      <BarCodeScanner
        onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
        style={StyleSheet.absoluteFillObject}
      />
        {scanned && <Button title={'Tap to Scan Again'} onPress={() => setScanned(false)} />}
      </View>
      <Text style={styles.qrcodeText}>{qrText}</Text>
      <Text style={styles.maintext}>{text}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  barcodebox: {
    alignItems: 'center',
    justifyContent: 'center',
    height: 300,
    width: 300,
    overflow: 'hidden',
  },
  maintext: {
    fontSize: 16,
    marginTop:5,
    alignItems:"center",
    justifyContent:"center",

  },
  qrcodeText:{
    marginTop:5,
    fontSize: 18,
    fontWeight:"bold",

  }
});
