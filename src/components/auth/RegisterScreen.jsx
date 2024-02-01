import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, Button } from 'react-native';

export default function RegisterScreen() {
  const [cpf, setCpf] = useState('');
  const [name, setName] = useState('');
  const [street, setStreet] = useState('');
  const [neighborhood, setNeighborhood] = useState('');
  const [number, setNumber] = useState('');
  const [password, setPassword] = useState('');

  function handleSubmit() {
    const data = {
      cpf: cpf,
      name: name,
      password: password,
      adress: {
        street: street,
        neighborhood: neighborhood,
        number: number,
      },
    };
    if (verifyFields(data)) {
      // aqui eu faço oq ele deve fazer caso os dados estejam validos
    }
  }

  return (
    <View style={styles.container}>
      <Text style={styles.label}>CPF:</Text>
      <TextInput
        style={styles.input}
        maxLength={11}
        onChangeText={(text) => setCpf(text)}
        placeholder="Digite o CPF"
      />

      <Text style={styles.label}>Nome:</Text>
      <TextInput
        style={styles.input}
        onChangeText={(text) => setName(text)}
        placeholder="Digite o nome"
      />

      <Text style={styles.label}>Logradouro:</Text>
      <TextInput
        style={styles.input}
        onChangeText={(text) => setStreet(text)}
        placeholder="Digite o logradouro"
      />

      <Text style={styles.label}>Bairro:</Text>
      <TextInput
        style={styles.input}
        onChangeText={(text) => setNeighborhood(text)}
        placeholder="Digite o bairro"
      />

      <Text style={styles.label}>Número:</Text>
      <TextInput
        style={styles.input}
        onChangeText={(text) => setNumber(text)}
        placeholder="Digite o número"
      />

      <Text style={styles.label}>Senha:</Text>
      <TextInput
        style={styles.input}
        onChangeText={(text) => setPassword(text)}
        placeholder="Digite a senha"
      />

      <Button title="Cadastrar" onPress={handleSubmit} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 5,
    flex: 1,
  },
  label: {
    fontSize: 16,
    marginBottom: 8,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 16,
    padding: 8,
  },
});
