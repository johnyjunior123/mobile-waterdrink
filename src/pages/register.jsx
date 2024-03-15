import { StyleSheet, View } from 'react-native';
import RegisterForm from '../components/auth/RegisterForm';

export function RegisterScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <RegisterForm navigation={navigation} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
