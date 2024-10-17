import { useState } from 'react';
import Header from './components/Header/Header';
import { PersonalInformation } from './components/PersonalInformation/PersonalInformation';
import {HobbiesContainer} from './components/HobbiesContainer/HobbiesContainer';
import { StyleSheet, View } from 'react-native';
import QrCode from './components/QrCode/QrCode';

export default function App() {
  const [displayMyQR, setDisplayMyQR] = useState(true);
  return (
    <View style={styles.container}>
      <Header setDisplayMyQR={setDisplayMyQR} />
      {
        displayMyQR ?
          <View style={styles.bodyStyles}>
              <PersonalInformation />
              <HobbiesContainer />
          </View>
          :
          <QrCode />
      }
      </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  bodyStyles: {
    width: '100%',
    borderWidth: 2,
    borderColor: 'black',
    alignItems: 'center',
    justifyContent: 'space-between',
    height: '85%'
  },

});
