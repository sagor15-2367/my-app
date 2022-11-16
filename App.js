import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import Hello from '../my-app/Screen/Hello';
import Login from './Screen/Login';

export default function App() {
  return (
    <View style={styles.container}>
      <Hello/>
      <Login/>
      <StatusBar style="auto" />
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
