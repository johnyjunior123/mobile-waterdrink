import React, { useState } from 'react';
import { FaLock } from 'react-icons/fa';
import { BiSolidUser } from 'react-icons/bi';
import {
  View,
  Text,
  TextInput,
  Button,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';

export default function LoginScreen() {
  const [cpf, setCpf] = useState('');
  const [senha, setSenha] = useState('');

  const handleLogin = () => {
    // Adicione a lógica de autenticação aqui
    if (cpf && senha) {
      // Lógica de login bem-sucedida
    } else {
    }
  };

  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.logo}>Logo</Text>
      </View>
      <View style={styles.containerForm}>
        {/* <Text style={styles.title}>Login</Text> */}
        <View style={styles.input_icon}>
          <BiSolidUser />
          <TextInput
            value={cpf}
            placeholder="Digite seu CPF"
            onChangeText={(text) => setCpf(text)}
            style={styles.input}
          />
        </View>
        <View style={styles.input_icon}>
          <FaLock />
          <TextInput
            value={senha}
            placeholder="Digite sua senha"
            onChangeText={(text) => setSenha(text)}
            secureTextEntry
            style={styles.input}
          />
        </View>

        <TouchableOpacity onPress={() => console.log('Recuperar senha')}>
          <Text style={styles.link}>Esqueceu a senha?</Text>
        </TouchableOpacity>

        <TouchableOpacity
          title="Login"
          style={styles.button}
          onPress={handleLogin}
        >
          <Text style={styles.textButton}>Entrar</Text>
        </TouchableOpacity>
      </View>

      <View
        style={{
          ...styles.linksContainer,
          alignSelf: 'flex-end',
          marginRight: '1em',
        }}
      >
        <TouchableOpacity onPress={() => console.log('Cadastrar')}>
          <Text style={styles.link}>Não tem uma conta? Cadastre-se</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
    width: '100%',
    alignItems: 'center',
  },
  containerForm: {
    alignItems: 'center',
    borderColor: 'red',
    width: '100%',
    padding: 5,
  },
  logo: {
    alignSelf: 'center',
    fontSize: '3em',
    marginBottom: '30%',
  },
  title: {
    fontSize: 20,
    marginBottom: 8,
    alignSelf: 'flex-start',
  },
  input_icon: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: 'gray',
    width: '85%',
    borderRadius: 8,
    paddingHorizontal: 10,
    marginBottom: 10,
  },
  input: {
    height: 40,
    padding: 8,
    width: '90%',
  },
  linksContainer: {
    flexDirection: 'column',
    justifyContent: 'space-between',
    marginTop: 12,
  },
  link: {
    color: 'blue',
    textDecorationLine: 'underline',
    marginTop: 2,
  },
  button: {
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
