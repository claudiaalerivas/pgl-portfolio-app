import { useState } from 'react';
// LIGTH
import Header from './components/Header/Header';
import  PersonalInformation  from './components/componentsLigth/PersonalInformation/PersonalInformation';
import  HobbiesContainer  from './components/componentsLigth/HobbiesContainer/HobbiesContainer';
import { StyleSheet, View } from 'react-native';
import QrCode from './components/componentsLigth/QrCode/QrCode';

// DARK 
import  PersonalInformationDark  from './components/compenentsDark/PersonalInformationDark/PersonalInformation';
import  HobbiesContainerDark  from './components/compenentsDark/HobbiesContainerDark/HobbiesContainer';
import QrCodeDark from './components/compenentsDark/QrCode/QrCode';

export default function App() {
  const [displayMyQR, setDisplayMyQR] = useState(true);
  const [darkMode, setDarkMode] = useState(false);

  return (
    <View style={styles.container}>
      <Header setDisplayMyQR={setDisplayMyQR} setDarkMode={setDarkMode} darkMode ={darkMode}/>
      {darkMode ? (
        displayMyQR ? (
          <View style={styles.bodyStyles}>
            <PersonalInformationDark />
            <HobbiesContainerDark />
          </View>
        ) : (
          <QrCodeDark />
        )
      ) : (
        displayMyQR ? (
          <View style={styles.bodyStyles}>
            <PersonalInformation />
            <HobbiesContainer />
          </View>
        ) : (
          <QrCode />
        )
      )}
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
    alignItems: 'center',
    justifyContent: 'space-between',
    height: '85%',
  },
});
