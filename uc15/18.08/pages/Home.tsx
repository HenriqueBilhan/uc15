
import React, {
  useEffect,
  useState,
} from 'react';

import {
  View,
  FlatList,
  ActivityIndicator,
  StyleSheet,
} from 'react-native';

import CardSerie from '../components/CardSerie';

export default function Home({
  navigation,
}: any) {
  const [series, setSeries] =
    useState<any[]>([]);

  const [carregando, setCarregando] =
    useState(true);

  useEffect(() => {
    buscarSeries();
  }, []);

  async function buscarSeries() {
    try {
      const resposta = await fetch(
        'https://api.tvmaze.com/shows'
      );

      const dados = await resposta.json();

      setSeries(dados);
    } catch (erro) {
      console.log(
        'Erro ao buscar séries:',
        erro
      );
    } finally {
      setCarregando(false);
    }
  }

  if (carregando) {
    return (
      <View style={styles.carregando}>
        <ActivityIndicator
          size="large"
          color="#e50914"
        />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={series}
        keyExtractor={(item) =>
          item.id.toString()
        }
        renderItem={({ item }) => (
          <CardSerie
            serie={item}
            navigation={navigation}
          />
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: '#eee',
  },

  carregando: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});