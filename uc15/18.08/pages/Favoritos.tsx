import React, { useContext } from 'react';

import {
  View,
  Text,
  FlatList,
  StyleSheet,
} from 'react-native';

import { FavoritosContext } from '../context/FavoritosContext';

import CardSerie from '../components/CardSerie';

export default function Favoritos() {
  const { favoritos } =
    useContext(FavoritosContext);

  return (
    <View style={styles.container}>
      <FlatList
        data={favoritos}
        keyExtractor={(item) =>
          item.id.toString()
        }
        renderItem={({ item }) => (
          <CardSerie
            serie={item}
            navigation={null}
          />
        )}
        ListEmptyComponent={
          <Text style={styles.vazio}>
            Nenhuma série favoritada.
          </Text>
        }
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

  vazio: {
    textAlign: 'center',
    fontSize: 18,
    marginTop: 30,
  },
});