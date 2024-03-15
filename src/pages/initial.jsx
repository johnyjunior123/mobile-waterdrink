import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import {
  BiSolidPurchaseTag,
  BiSolidCart,
  BiSolidUser,
  BiExit,
} from 'react-icons/bi';

export function InitalScreen({ navigation }) {
  const handleLogout = () => {
    navigation.reset({
      index: 0,
      routes: [{ name: 'Initial' }],
    });
  };
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.containerOptions}
        onPress={() => navigation.navigate('enterprises')}
      >
        <BiSolidCart />
        <Text style={styles.text}>Pedir Água</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.containerOptions}
        onPress={() => navigation.navigate('orders')}
      >
        <BiSolidPurchaseTag />
        <Text style={styles.text}>Compras Efetuadas</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.containerOptions}>
        <BiSolidUser />
        <Text style={styles.text}>Perfil</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          localStorage.removeItem('user');
          handleLogout();
        }}
        style={styles.containerOptions}
      >
        <BiExit />
        <Text style={styles.text}>Sair</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    width: '100%',
    height: '100%',
    color: 'red',
    alignItems: 'center',
    justifyContent: 'center',
  },
  containerOptions: {
    display: 'flex',
    flexDirection: 'row',
    alignContent: 'center',
    gap: 20,
    flexGrow: 0.9,
    alignItems: 'center',
    borderRadius: 10,
    padding: 12,
    margin: '1em',
    width: '80%',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 5,
  },
  text: {
    fontSize: '1em',
  },
});
