import { StyleSheet, View } from 'react-native';
import LoginScreen from '../components/auth/LoginScreen';

export default function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <LoginScreen navigation={navigation} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
