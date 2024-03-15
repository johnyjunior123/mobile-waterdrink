import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import { Register } from '../../services/auth.service';

export default function RegisterForm({ navigation }) {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [street, setStreet] = useState('');
  const [neighborhood, setNeighborhood] = useState('');
  const [number, setNumber] = useState('');
  const [password, setPassword] = useState('');

  async function handleSubmit() {
    const data = {
      email: email,
      name: name,
      password: password,
      // adress: {
      //   street: street,
      //   neighborhood: neighborhood,
      //   number: number,
      // },
    };
    await Register(data);
    navigation.navigate('login');
  }

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Nome:</Text>
      <TextInput
        style={styles.input}
        onChangeText={(text) => setName(text)}
        placeholder="Digite o nome"
      />

      <Text style={styles.label}>Email:</Text>
      <TextInput
        style={styles.input}
        onChangeText={(text) => setEmail(text)}
        placeholder="Digite o email"
      />

      <Text style={styles.label}>Senha:</Text>
      <TextInput
        style={styles.input}
        onChangeText={(text) => setPassword(text)}
        placeholder="Digite a senha"
      />

      <TouchableOpacity
        title="Register"
        style={styles.button}
        onPress={handleSubmit}
      >
        <Text style={styles.textButton}>Cadastrar</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    width: '80%',
  },
  label: {
    fontSize: 16,
    marginBottom: 8,
  },
  input: {
    height: 40,
    width: '100%',
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 16,
    padding: 8,
  },
  button: {
    alignSelf: 'center',
    borderRadius: 10,
    backgroundColor: 'red',
    padding: 12,
    margin: '1em',
    width: '60%',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 5,
  },
  textButton: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: '16',
    textAlign: 'center',
  },
});
