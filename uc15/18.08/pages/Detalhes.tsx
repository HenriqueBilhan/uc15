import React from 'react';

import {
  View,
  Text,
  Image,
  ScrollView,
  StyleSheet,
} from 'react-native';

export default function Detalhes({
  route,
}: any) {
  const { serie } = route.params;

  const descricao = serie.summary
    ? serie.summary.replace(
        /<[^>]*>/g,
        ''
      )
    : 'Descrição não disponível.';

  return (
    <ScrollView style={styles.container}>
      <Image
        source={{
          uri:
            serie.image?.original ||
            serie.image?.medium ||
            'https://via.placeholder.com/300',
        }}
        style={styles.imagem}
      />

      <Text style={styles.nome}>
        {serie.name}
      </Text>

      <Text style={styles.texto}>
        <Text style={styles.negrito}>
          Gênero:
        </Text>{' '}
        {serie.genres?.join(', ') ||
          'Não informado'}
      </Text>

      <Text style={styles.texto}>
        <Text style={styles.negrito}>
          Ano de lançamento:
        </Text>{' '}
        {serie.premiered
          ? serie.premiered.substring(0, 4)
          : 'Não informado'}
      </Text>

      <Text style={styles.texto}>
        <Text style={styles.negrito}>
          Nota:
        </Text>{' '}
        {serie.rating?.average ||
          'Sem avaliação'}
      </Text>

      <Text style={styles.tituloSinopse}>
        Sinopse
      </Text>

      <Text style={styles.sinopse}>
        {descricao}
      </Text>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20,
  },

  imagem: {
    width: '100%',
    height: 400,
    resizeMode: 'contain',
    marginBottom: 20,
  },

  nome: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 15,
  },

  texto: {
    fontSize: 16,
    marginBottom: 10,
  },

  negrito: {
    fontWeight: 'bold',
  },

  tituloSinopse: {
    fontSize: 22,
    fontWeight: 'bold',
    marginTop: 15,
    marginBottom: 10,
  },

  sinopse: {
    fontSize: 16,
    lineHeight: 24,
    marginBottom: 30,
  },
});