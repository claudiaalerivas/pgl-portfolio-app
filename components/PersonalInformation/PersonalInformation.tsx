import React from 'react'
import { StyleSheet, Text, View, Image } from 'react-native';
export const PersonalInformation = () => {
  return (
    <View>
      <View style={styles.principalContainerInfo}>
        <Image style={styles.avatar} source={require('../../assets/images/avatar.jpg')} />
        <View style={styles.personalInfoContainer}>
          <Text style={styles.title}>
            Descripción sobre mí!
          </Text>
          <Text>
            Soy profe y me gusta mi trabajo aunque a veces me de por enrevesar prácticas para mis queridos alumnos
          </Text>
        </View>
      </View>
    </View>
  )
}
const styles = StyleSheet.create({
  principalContainerInfo: {
    flexDirection: 'row', 
    alignItems: 'center'
  },
  avatar: {
    height: 90,
    width: 90,
    borderRadius: 100
  },
  title: {
    textAlign: 'center', 
    fontWeight: '700', 
    fontSize: 20
  }, 
  personalInfoContainer: {
    margin: 10, 
    backgroundColor: 'lightgray', 
    padding: 10, 
    borderRadius: 10, 
    width: '70%'
  }
})