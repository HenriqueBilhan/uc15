import { StyleSheet, Text, View, TextInput } from 'react-native'
import React, { useState } from 'react'

const CampoNome = () => {

    const [nome, setNome] = useState<string>('')

  return (
    <View>
      <TextInput
        style={styles.input}
        value={nome}
        onChangeText={setNome}
        placeholder='Digite seu nome'
      />
      <Text>Seja bem-vindo(a) {nome}</Text>
    </View>
  )
}

export default CampoNome

const styles = StyleSheet.create({
    input: {
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 8,
        padding: 10
    }
})