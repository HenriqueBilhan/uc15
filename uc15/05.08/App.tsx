
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Cartao from './components/Cartao';
import PerfilCartao from './components/PerfilCartao';

export default function App() {
  return (
    <View style={styles.container}>
      <PerfilCartao nome= "Henrique"/>
      <PerfilCartao nome="nicolas"/>
      <PerfilCartao nome="henry"/>
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