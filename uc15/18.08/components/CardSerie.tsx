import React, { useContext } from 'react';

import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';

import { FavoritosContext } from '../context/FavoritosContext';

export default function CardSerie({
  serie,
  navigation,
}: any) {
  const {
    adicionarFavorito,
    removerFavorito,
    verificarFavorito,
  } = useContext(FavoritosContext);

  const favorito = verificarFavorito(serie.id);

  return (
    <View style={styles.card}>
      <Image
        source={{
          uri:
            serie.image?.medium ||
            'https://via.placeholder.com/200',
        }}
        style={styles.imagem}
      />

      <View style={styles.info}>
        <Text style={styles.nome}>
          {serie.name}
        </Text>

        <Text style={styles.genero}>
          {serie.genres?.join(', ') ||
            'Sem gênero'}
        </Text>

        <TouchableOpacity
          style={styles.botaoDetalhes}
          onPress={() =>
            navigation.navigate(
              'Detalhes',
              { serie }
            )
          }
        >
          <Text style={styles.textoBotao}>
            Ver detalhes
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={
            favorito
              ? styles.botaoRemover
              : styles.botaoFavorito
          }
          onPress={() => {
            if (favorito) {
              removerFavorito(serie.id);
            } else {
              adicionarFavorito(serie);
            }
          }}
        >
          <Text style={styles.textoBotao}>
            {favorito
              ? 'Remover favorito'
              : 'Adicionar favorito'}
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    marginBottom: 15,
    borderRadius: 10,
    padding: 10,
    flexDirection: 'row',
  },

  imagem: {
    width: 100,
    height: 140,
    borderRadius: 8,
  },

  info: {
    flex: 1,
    marginLeft: 15,
    justifyContent: 'center',
  },

  nome: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },

  genero: {
    marginBottom: 10,
    color: '#555',
  },

  botaoDetalhes: {
    backgroundColor: '#e50914',
    padding: 10,
    borderRadius: 6,
    marginBottom: 8,
    alignItems: 'center',
  },

  botaoFavorito: {
    backgroundColor: '#ff9800',
    padding: 10,
    borderRadius: 6,
    alignItems: 'center',
  },

  botaoRemover: {
    backgroundColor: '#555',
    padding: 10,
    borderRadius: 6,
    alignItems: 'center',
  },

  textoBotao: {
    color: '#fff',
    fontWeight: 'bold',
  },
});