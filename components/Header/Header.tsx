
import { Pressable, StyleSheet, Text, View } from 'react-native';
export type App = {
  setDisplayMyQR: Function;
}
const Header = ({ setDisplayMyQR }: App) => {
  return (
    <View style={styles.header}>
      <Text style={styles.title}>My Portfolio App</Text>
      <View style={styles.navegationMenu}>
        <Pressable accessibilityLabel='Información personal' style={styles.buttomRoute} onPress={() => setDisplayMyQR(true)}>
          <Text style={styles.textButtomMyInfo}>Mi info</Text>
        </Pressable>
        <Pressable accessibilityLabel='Botón redireccionamiento QR' style={styles.buttomRoute} onPress={() => setDisplayMyQR(false)}>
          <Text style={styles.textButtomQr}>Mi Repo</Text>
        </Pressable>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  textButtomQr: {
    color: 'lightgray',
    fontWeight: 'bold',
    textTransform: 'uppercase',
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 7,
    },
    shadowOpacity: 0.43,
    shadowRadius: 9.51,
    elevation: 15,
  },
  textButtomMyInfo: {
    color: 'lightgray',
    fontWeight: 'bold',
    textTransform: 'uppercase'
  },
  title: {
    backgroundColor: 'gray',
    textAlign: 'center',
    fontWeight: 'bold',
    textAlignVertical: 'center',
    fontSize: 30,
  },
  header: {
    height: '15%',
    paddingTop: 50,
    width: '100%',
  },
  navegationMenu: {
    flexDirection: 'row',
    backgroundColor: 'darkgray',
    justifyContent: 'center',
    alignItems: 'center'
  },
  buttomRoute: {
    width: '50%',
    padding: 11,
    paddingLeft: 50
  },

})
export default Header