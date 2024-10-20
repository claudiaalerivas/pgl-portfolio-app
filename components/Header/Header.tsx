
import { Pressable, StyleSheet, Text, View, Image } from 'react-native';
import Entypo from '@expo/vector-icons/Entypo';
export type App = {
  setDisplayMyQR: Function,
  setDarkMode: Function,
  darkMode: boolean
}
const Header = ({ setDisplayMyQR, setDarkMode, darkMode }: App ) => {
  return (
    <View style={styles.header}>
      <Image style={styles.logo} source={require('../../assets/images/logo2.png')} />
      <View style={styles.navegationMenu}>
        <Pressable accessibilityLabel='Información personal' style={styles.buttomRouteTitle} onPress={() => setDisplayMyQR(true)}>
          <Text style={styles.text}>Mi info</Text>
        </Pressable>
        <Pressable accessibilityLabel='Botón redireccionamiento QR' style={styles.buttomRoute} onPress={() => setDisplayMyQR(false)}>
          <Text style={styles.text}>Mi Repo</Text>
        </Pressable>
        <Pressable accessibilityLabel='Botón redireccionamiento QR' style={styles.icon} onPress={() => setDarkMode(!darkMode)}>
          <Entypo name = "adjust" size={24} color="white" />
        </Pressable>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  logo :{
    width: 60, 
    height: 60, 
    margin: 0, 
    zIndex:-1
  },
  text:{
    color: 'lightgray', 
    fontWeight: 'bold', 
    textTransform: 'uppercase',
  },
  header: {
    backgroundColor: '#6a6969',
    height: '15%',
    paddingTop: 60,
    paddingBottom: 10,
    width: '100%',
  },
  navegationMenu: {
    paddingLeft:'20%',
    marginTop:'-10%',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  buttomRoute: {
    width: '50%',
    paddingBottom: 5,
    paddingLeft: 10,
  },
  icon: {
    width: '50%',
    paddingLeft: 20,
    marginTop:'-2%'
  },
  buttomRouteTitle: {
    width: '50%',
    paddingBottom: 5,
    paddingLeft: 80,
  },
})
export default Header