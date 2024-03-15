import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { BiUserCheck } from 'react-icons/bi';

export function EnterpriseItem({ enterprise, navigation }) {
  return (
    <TouchableOpacity
      onPress={() => navigation.navigate('products', { enterprise })}
      style={styles.containerOptions}
    >
      <BiUserCheck style={{ fontSize: '2em' }} />
      <View>
        <Text style={styles.title}>{enterprise.name}</Text>
        <Text style={styles.active}>Aberto</Text>
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
  active: {
    fontSize: '0.5em',
  },
});
