import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Cartao = () => {
  return (
    <View style={styles.container}>
      <Text style={[styles.texto, styles.box]}>Cartao</Text>
      <Text style={[styles.texto, styles.box]}>Cartao</Text>
      <Text style={[styles.texto, styles.box]}>Cartao</Text>
    </View>
  )
}

export default Cartao

const styles = StyleSheet.create({
    texto: {
        color: "orange",
        fontSize: 50
    },
    box: {
        backgroundColor: "gray",
        padding: 10,
        borderRadius: 20
    },
    container: {
        backgroundColor: "red",
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
    }
})
