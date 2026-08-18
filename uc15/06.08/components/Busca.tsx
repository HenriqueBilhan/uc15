import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  FlatList,
  Image,
  StyleSheet,
} from 'react-native';

const produtos = [
  {
    id: 1,
    titulo: 'Super Nintendo',
    preco: 1399.59,
    imagem:
      'https://http2.mlstatic.com/D_NQ_NP_2X_632652-MLB93761880025_092025-F-super-nintendo--jogos-garantia-nfe.webp',
  },
  {
    id: 2,
    titulo: 'Memory Card PS2',
    preco: 34.99,
    imagem:
      'https://http2.mlstatic.com/D_NQ_NP_2X_957248-MLB114967756895_072026-F-memory-card-64mb-para-playstation-2-compativel-com-ps2.webp',
  },
  {
    id: 3,
    titulo: 'PlayStation 4',
    preco: 1500.00,
    imagem:
      'https://http2.mlstatic.com/D_NQ_NP_2X_988697-MLA46869475021_072021-F.webp',
  },
  {
    id: 4,
    titulo: 'PS3',
    preco: 799.99,
    imagem:
      'https://http2.mlstatic.com/D_NQ_NP_2X_759933-MLA40540552933_012020-F.webp',
  },
  {
    id: 5,
    titulo: 'Fone de ouvido Bluetooth',
    preco: 100,
    imagem:
      'https://m.media-amazon.com/images/I/510DnC5nlnL._AC_SY300_SX300_QL70_ML2_.jpg',
  },
  {
    id: 6,
    titulo: 'Console Microsoft Xbox One S 1TB Branco',
    preco: 1378,
    imagem:
      'https://http2.mlstatic.com/D_NQ_NP_2X_707155-MLA99522246354_122025-F.webp',
  },
];

export default function Busca() {
  const [termo, setTermo] = useState<string>('');

  const produtosFiltrados = produtos.filter((produto) =>
    produto.titulo.toLowerCase().includes(termo.toLowerCase())
  );

  return (
    <View style={styles.container}>

      <TextInput
        style={styles.input}
        placeholder="Buscar produto"
        value={termo}
        onChangeText={setTermo}
      />

      <FlatList
        data={produtosFiltrados}
        keyExtractor={(item) => item.id.toString()}
        contentContainerStyle={styles.lista}
        renderItem={({ item }) => (
          <View style={styles.produto}>

            <View style={styles.containerImagem}>
              <Image
                source={{ uri: item.imagem }}
                style={styles.imagem}
                resizeMode="contain"
              />
            </View>

            <Text style={styles.titulo} numberOfLines={2}>
              {item.titulo}
            </Text>

            <Text style={styles.preco}>
              R$ {item.preco.toFixed(2)}
            </Text>

          </View>
        )}
      />

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 15,
    backgroundColor: '#f5f5f5',
    alignItems: 'center',
  },

  input: {
    width: '80%',
    maxWidth: 700,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    padding: 12,
    marginBottom: 15,
    backgroundColor: '#fff',
  },

  lista: {
    width: '100%',
    alignItems: 'center',
    paddingBottom: 20,
  },

  produto: {
    width: 500,
    maxWidth: '90%',
    height: 200,
    backgroundColor: '#fff',
    padding: 8,
    borderRadius: 8,
    marginBottom: 15,
  },

  containerImagem: {
    width: '100%',
    height: 120,
    justifyContent: 'center',
    alignItems: 'center',
  },

  imagem: {
    width: '100%',
    height: '100%',
  },

  titulo: {
    fontSize: 14,
    fontWeight: 'bold',
    marginTop: 8,
    height: 36,
  },

  preco: {
    fontSize: 14,
    fontWeight: 'bold',
    color: 'green',
    marginTop: 5,
  },
});