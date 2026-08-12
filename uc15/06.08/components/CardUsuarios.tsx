import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
interface CardProps{
    id:number,
    nome:string,
    email:string
}
const CardUsuarios = ({id,nome,email}: CardProps) => {
  return (
    <View style={styles.container}>
      <Text>{id}</Text>
      <Text>{nome}</Text>
      <Text>{email}</Text>
    </View>
  )
}

export default CardUsuarios

const styles = StyleSheet.create({
    container:{
        backgroundColor: 'orange',
        padding: 5,
        borderRadius: 14
    }
})