import React from 'react'
import { StyleSheet, View } from 'react-native';
import QRCode from 'react-native-qrcode-svg';

const QrCode = () => {
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
    alignItems: 'center',
    justifyContent: 'space-between',
    height: '85%'
  },
  centerQr: {
    justifyContent: 'center',
    width: '100%',
    height: '100%',
    alignItems: 'center'
  },
});
export default QrCode