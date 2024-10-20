import { StyleSheet, Text, View, FlatList } from 'react-native';
import { info } from '../../../data/info';
import Entypo from '@expo/vector-icons/Entypo';


const Hobbies = () => {
  return (
    <View>
      <FlatList
        data={info}
        renderItem={({ item }) =>
          <Text style={styles.itemList}>
            <Entypo style={styles.icons} name= {item.icon} size={24} color="#00aeef" />
            {item.description}
            </Text>
        }
      />
    </View>
  )
}


const styles = StyleSheet.create({
  icons:{
    margin:10
  },
  itemList: {
    padding: 20,
    paddingLeft: '10%',
    paddingRight: '25%',
    color: '#3b3b3c',
    fontWeight: 'bold',
    fontSize: 16,
  }
});
export default Hobbies