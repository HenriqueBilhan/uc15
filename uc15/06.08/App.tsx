import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TouchableOpacity, View, SafeAreaView } from 'react-native';
import Contador from './components/Contador';
import LigaDesliga from './components/LigaDesliga';
import CampoNome from './components/CampoNome';
import Calculadora from './components/Calculadora';
import CardUsuarios from './components/CardUsuarios';
import ListaUsuarios from './components/ListaUsuarios';
import Relogio from './components/Relogio';
import Busca from './components/Busca';
import ListaProdutos from './components/ListaProdutos'
import CardPokemon from './components/CardPokemon';
export default function App() {
  return (
    <CardPokemon/>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f2f2f2',
  },
})