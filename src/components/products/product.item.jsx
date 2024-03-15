import { StyleSheet, View, Text, TouchableOpacity, Image } from 'react-native';
import { getPhoto } from '../../../utils/getPhoto.js';

export function ProductItem({ item, navigation }) {
  return (
    <TouchableOpacity onPress={navigation} style={styles.containerOptions}>
      <Image
        source={getPhoto(item.photo)}
        style={{ width: '2.5em', height: '2.5em' }}
      />
      <View>
        <Text style={styles.title}>{item.name}</Text>
        <Text style={styles.price}>R$ {item.price}</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  containerOptions: {
    display: 'flex',
    flexDirection: 'row',
    flexGrow: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
    gap: 20,
    borderRadius: 10,
    padding: 12,
    margin: '1em',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 5,
  },
  title: {
    fontSize: '1.2em',
  },
  price: {
    color: 'green',
    fontWeight: '700',
  },
});
