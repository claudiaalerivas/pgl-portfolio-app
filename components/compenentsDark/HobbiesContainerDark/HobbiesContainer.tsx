import React from 'react'
import { StyleSheet, Text, View } from 'react-native';
import Hobbies from '../HobbiesDark/Hobbies';

const HobbiesContainerDark = () => {
  return (
    <View style={styles.containerPrincipal}>
      <Text style={styles.title}>
        Hobbies
      </Text>
      <View style={styles.container}>
        <Hobbies />
      </View>
    </View >
  )
}
const styles = StyleSheet.create({
  containerPrincipal:{
    backgroundColor: '#3b3b3c',
    width:'100%'
  },
  title: { 
    marginTop: '5%' ,
    fontSize: 30, 
    color: '#17a89d',
  },
  container: {
    marginBottom: '125%',
  }
});

export default HobbiesContainerDark