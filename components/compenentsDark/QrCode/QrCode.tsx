import React from 'react'
import { StyleSheet, View } from 'react-native';
import QRCode from 'react-native-qrcode-svg';

const QrCodeDark = () => {
  return (
    <View style={styles.bodyStyles}>
      <View style={styles.centerQr}>
        <QRCode value="https://github.com/claudiaalerivas" />
      </View>
    </View>
  )
}


const styles = StyleSheet.create({
  bodyStyles: {
    width: '100%',
    backgroundColor:'black',
    alignItems: 'center',
    justifyContent: 'space-between',
    height: '85%'
  },
  centerQr: {
    backgroundColor:'#474747',
    justifyContent: 'center',
    width: '100%',
    height: '100%',
    alignItems: 'center'
  },
});
export default QrCodeDark