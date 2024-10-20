import React from 'react'
import { StyleSheet, Text, View } from 'react-native';
import Hobbies from '../Hobbies/Hobbies';

const HobbiesContainer = () => {
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
    backgroundColor: '#e2e2e2',
    width:'100%'
  },
  title: { 
    marginTop: '5%' ,
    fontSize: 30, 
    color: '#0e76bc',
  },
  container: {
    marginBottom: '125%',
  }
});
export default HobbiesContainer