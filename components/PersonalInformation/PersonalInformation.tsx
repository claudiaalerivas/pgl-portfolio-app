import React from 'react'
import {StyleSheet, Text, View, Image } from 'react-native';

const PersonalInformation = () => {
  return (
    <View style={styles.containerInfo}>
      <Image style = {{ width: 1000, height:90, zIndex:-1}} source={require('../../../assets/images/backgroundLigth.jpg')} />
      <View >
        <Image style={styles.avatar} source={require('../../../assets/images/avatar.jpg')} />
        <View style={styles.containerText}>
          <View style={styles.text}>
            <Text style={styles.titleText}>
              Descripción sobre mí!
            </Text>
            <Text style={styles.infoText}>
              ¡Hola! soy Claudia, estudiante de 2DAM, o "señorita Estupíñan" -.-
            </Text>
            <Text style={styles.infoText}>Me considero una persona responsable, o que simplemente no dejo que mi vida se descontrole, la verdad me tomo my enserio lo que hago! porque de eso vivire :D, o al menos eso espero, pero siempre lo intento hacer con una sonrisa, y alguna que otra queja por los bugs, pero y quien no ?</Text>
          </View>
        </View>
      </View>
    </View>
  )
}
const styles = StyleSheet.create({
  containerInfo: {
    alignItems: 'center',
  },
  infoText: {
    color: '#3b3b3c',
    textAlign: 'justify',
    marginRight: 50,
  },
  titleText: {
    color: '#0e76bc',
    fontSize: 20,
    paddingBottom: 20
  },
  containerText: {
    marginTop:'-5%',
    marginBottom:'-5%'
  },
  text: {
    color: 'black',
    margin: 20,
    width: '100%',
    padding: 10,
    
  },
  avatar: {
    marginTop:'-10%',
    height: 100,
    width: 100,
    borderRadius: 50,
    marginLeft: '70%',
    marginBottom: '-10%',
    zIndex: 1
  },
});
export default PersonalInformation