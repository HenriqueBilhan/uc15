import React from 'react';

import {
  View,
  Text,
  StyleSheet,
} from 'react-native';

export default function Perfil() {
  return (
    <View style={styles.container}>
      <View style={styles.foto}>
        <Text style={styles.inicial}>
          H
        </Text>
      </View>

      <Text style={styles.nome}>
        Henrique Bilhan de Souza
      </Text>

      <Text style={styles.email}>
        bilhanhenrique19@email.com
      </Text>

      <Text style={styles.descricao}>
        Estudante de Desenvolvimento de Sistemas,
        interessado em programação e desenvolvimento
        de aplicativos.
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    padding: 30,
    backgroundColor: '#fff',
  },

  foto: {
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: '#e50914',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 30,
    marginBottom: 20,
  },

  inicial: {
    fontSize: 45,
    color: '#fff',
    fontWeight: 'bold',
  },

  nome: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 10,
  },

  email: {
    fontSize: 16,
    color: '#666',
    marginBottom: 30,
  },

  descricao: {
    fontSize: 16,
    textAlign: 'center',
    lineHeight: 24,
  },
});