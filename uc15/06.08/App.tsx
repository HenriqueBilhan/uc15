import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Contador from './components/Contador';
import LigaDesliga from './components/LigaDesliga';
import CampoNome from './components/CampoNome';
import Calculadora from './components/Calculadora';
export default function App() {
  return (
    <View>
       <Calculadora/>
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
