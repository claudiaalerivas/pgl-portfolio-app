import React from 'react'
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import Hobbies from '../Hobbies/Hobbies';

export const HobbiesContainer = () => {
  return (
    <View>
      <Text style={{ color: 'black', fontWeight: "900", textTransform: 'capitalize', fontSize: 20, textAlign: 'center' }}>
        cosas que me gustan mucho:
      </Text>
      <View style={styles.container}>
        <Hobbies />
      </View>
    </View >
  )
}
const styles = StyleSheet.create({
  container: {
    marginBottom: '50%',
    marginTop: '3%'
  }
});