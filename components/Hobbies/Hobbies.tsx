import { StyleSheet, Text, View, FlatList } from 'react-native';
import { info } from '../../data/info';


const Hobbies = () => {
  return (
    <View>
      <FlatList
        data={info}
        renderItem={({ item }) =>
          <Text style={styles.itemList}>{item.description}</Text>
        }
      />
    </View>
  )
}

export default Hobbies

const styles = StyleSheet.create({
  itemList: {
    borderColor: 'black',
    borderWidth: 1,
    borderStyle: 'dashed',
    padding: 20,
    paddingLeft: '25%',
    paddingRight: '25%',
    color: 'darkred',
    textAlign: 'center',
    fontWeight: 'bold',
    fontStyle: 'italic',
    fontSize: 16,
    backgroundColor: 'silver',
  }
});