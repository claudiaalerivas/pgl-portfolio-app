import React from 'react'
import { StyleSheet, Text, View, Image } from 'react-native';

const PersonalInformationDark = () => {
  return (
    <View style={styles.containerInfo}>
      <Image style = {styles.background} source={require('../../../assets/images/backgroundDark.jpg')} />
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
  background: { 
    width: 1000, 
    height:90, 
    zIndex:-1
  },
  containerInfo: {
    alignItems: 'center',
    backgroundColor: '#474747'
  },
  infoText: {
    color: '#c9c5c5',
    textAlign: 'justify',
    marginRight: 50
  },
  titleText: {
    color: '#17a89d',
    fontSize: 20,
    paddingBottom: 20
  },
  containerText: {
    backgroundColor: 'dark',
    marginTop:'-5%',
    marginBottom:'-5%'
  },
  text: {
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
})
export default PersonalInformationDark