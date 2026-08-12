import { FlatList, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import CardUsuarios from './CardUsuarios'

const dadosUsuarios = [
    {id: 1, nome:"henroque", email: "Henroque@mail.com"},
    {id: 2, nome:"Nicolas", email: "nico@mail.com"},
    {id: 3, nome:"Henrique", email: "olique@mail.com"},
    {id: 4, nome:"Henry", email: "henry@mail.com"},
    {id: 5, nome:"Timóteo", email: "timoteo@mail.com"}
]

//O componente FlatList renderiza dados de forma dinâmica
//Ou seja, ele lê dados do banco ou de um array, por exemplo, e consegue criar card com estes dados, sem precisarmos criar um por um na mão
const ListaUsuarios = () => {
  return (
    <View>
      <FlatList
        data={dadosUsuarios} // de onde ele importa os dados
        keyExtractor={(item) => item.id.toString()} // identifa qual a chave que diferencia cada item
        // diz o que fazer com cada item, como renderizar ele
        renderItem={({item}) => (
            <CardUsuarios id={Number(item.id)} nome={item.nome} email={item.email}/>
        )}
      />
    </View>
  )
}

export default ListaUsuarios

const styles = StyleSheet.create({})