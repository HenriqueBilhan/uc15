
import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
interface PerfilCartaoProps {
  nome:string
}

const PerfilCartao = ({nome}: PerfilCartaoProps) => {
  return (
    <View>
      <Text style={styles.texto}>Olá {nome}</Text>
    </View>
  )
}

export default PerfilCartao

const styles = StyleSheet.create({
    texto: {
        fontSize: 50
    }
})

