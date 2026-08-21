import React from 'react';

import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';

type Props = {
  navigation: any;
};

export default function Home({ navigation }: Props) {
  return (
    <View style={styles.container}>
      <Image
        source={{
          uri: 'https://raw.githubusercontent.com/PokeAPI/media/master/logo/pokeapi_256.png',
        }}
        style={styles.logo}
      />

      <Text style={styles.titulo}>
        Bem-vindo à Pokédex!
      </Text>

      <TouchableOpacity
        style={styles.botao}
        onPress={() => navigation.navigate('CardPokemon')}
      >
        <Text style={styles.textoBotao}>
          Entrar
        </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },

  logo: {
    width: 300,
    height: 130,
    resizeMode: 'contain',
    marginBottom: 30,
  },

  titulo: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 30,
    color: '#222',
  },

  botao: {
    backgroundColor: '#E53935',
    paddingVertical: 14,
    paddingHorizontal: 60,
    borderRadius: 10,
  },

  textoBotao: {
    color: '#FFF',
    fontSize: 18,
    fontWeight: 'bold',
  },
});