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
    titulo: 'Atari 2600',
    preco: 799.99,
    imagem:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7NP_ra2KIWX23_I_KwihB7iOPfKaE8Yc8l60We9W9AjoSj2s9I6Fl7QY&s=10',
  },
  {
    id: 2,
    titulo: 'Televisão',
    preco: 299.99,
    imagem:
      'https://cdn-br.propcart.com/vendors/GHR3ccj9ojGHIuIwUToA/items/GU02185-1.jpg',
  },
  {
    id: 3,
    titulo: 'Nintendo 64',
    preco: 999.99,
    imagem:
      'https://photos.enjoei.com.br/public/300x300/czM6Ly9waG90b3MuZW5qb2VpLmNvbS5ici9wcm9kdWN0cy80Mjk0MjA1OS81ZTYyMzhmYmNhYmM3ZjE0YzE0NzYxMDY2MzY4NWM4OC5qcGc',
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
    preco: 1.378,
    imagem: 'https://http2.mlstatic.com/D_NQ_NP_2X_707155-MLA99522246354_122025-F.webp',
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
        numColumns={3}
        keyExtractor={(item) => item.id.toString()}
        columnWrapperStyle={styles.linha}
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
  },

  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    padding: 12,
    marginBottom: 15,
    backgroundColor: '#fff',
  },

  lista: {
    paddingBottom: 20,
  },

  linha: {
    justifyContent: 'space-between',
    marginBottom: 15,
  },

  produto: {
    width: '31%',
    height: 200,
    backgroundColor: '#fff',
    padding: 8,
    borderRadius: 8,
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