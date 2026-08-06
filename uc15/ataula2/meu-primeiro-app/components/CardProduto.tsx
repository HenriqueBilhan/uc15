import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";

type CardProdutoProps = {
  foto: string;
  nome: string;
  preco: string;
};

const CardProduto = ({ foto, nome, preco }: CardProdutoProps) => {
  return (
    <View style={styles.card}>
      <Image source={{ uri: foto }} style={styles.imagem} />
      <Text style={styles.nome}>{nome}</Text>
      <Text style={styles.preco}>{preco}</Text>
    </View>
  );
};

export default CardProduto;

const styles = StyleSheet.create({
  card: {
    width: 300,
    backgroundColor: "#fff",
    borderRadius: 10,
    padding: 15,
    alignItems: "center",
    marginVertical: 10,
    elevation: 5,
  },

  imagem: {
    width: 150,
    height: 150,
    borderRadius: 10,
    marginBottom: 10,
  },

  nome: {
    fontSize: 20,
    fontWeight: "bold",
  },

  preco: {
    fontSize: 18,
    color: "green",
    marginTop: 5,
  },
});