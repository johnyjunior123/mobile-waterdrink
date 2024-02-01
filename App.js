import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import { StyleSheet, Text, View } from 'react-native';
import LoginScreen from './src/components/auth/LoginScreen';

export default function App() {
  return (
    <View style={styles.container}>
      <LoginScreen />
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
