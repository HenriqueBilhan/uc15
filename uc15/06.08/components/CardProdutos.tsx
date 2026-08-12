import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'

interface CardProps {
  id: number
  nome: string
  preco: number
  imagem: any
}

const CardProdutos = ({ id, nome, preco, imagem }: CardProps) => {
  return (
    <View style={styles.container}>

      <Image
        source={imagem}
        style={styles.imagem}
      />

      <Text>ID: {id}</Text>
      <Text>{nome}</Text>
      <Text>R$ {preco}</Text>

    </View>
  )
}

export default CardProdutos

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'orange',
    padding: 10,
    borderRadius: 14,
    margin: 5,
  },

  imagem: {
    width: 150,
    height: 150,
    resizeMode: 'contain',
  },
})