import React, { useEffect, useState } from 'react';
import { View, Text, TextInput, FlatList, Image, Button, StyleSheet, } from 'react-native';

const CardPokemon = () => {
  const [pokemons, setPokemons] = useState<any[]>([]);
  const [pesquisa, setPesquisa] = useState('');
  const [resultado, setResultado] = useState<any[]>([]);

  useEffect(() => {
    buscarPokemons();
  }, []);

  async function buscarPokemons() {
    try {
      const resposta = await fetch(
        'https://pokeapi.co/api/v2/pokemon?limit=151'
      );

      const dados = await resposta.json();

      const lista = await Promise.all(
        dados.results.map(async (pokemon: any, index: number) => {
          const respostaPokemon = await fetch(pokemon.url);
          const dadosPokemon = await respostaPokemon.json();

          return {
            id: index + 1,
            nome: dadosPokemon.name,
            imagem: dadosPokemon.sprites.front_default,
          };
        })
      );

      setPokemons(lista);
      setResultado(lista);
    } catch (erro) {
      console.log('Erro ao buscar Pokémon:', erro);
    }
  }

  function pesquisar() {
    const texto = pesquisa.toLowerCase().trim();

    if (texto === '') {
      setResultado(pokemons);
      return;
    }

    const filtrados = pokemons.filter((pokemon) =>
      pokemon.nome.toLowerCase().includes(texto)
    );

    setResultado(filtrados);
  }

  function Card(props: any) {
    return (
      <View style={styles.card}>
        <Image
          source={{ uri: props.pokemon.imagem }}
          style={styles.imagem}
        />

        <Text style={styles.nome}>
          #{props.pokemon.id} - {props.pokemon.nome}
        </Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>
        Pokédex - 1ª Geração
      </Text>

      <TextInput
        style={styles.input}
        placeholder="Digite o nome do Pokémon"
        value={pesquisa}
        onChangeText={setPesquisa}
      />

      <Button
        title="Pesquisar"
        onPress={pesquisar}
      />

      <FlatList
        data={resultado}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <Card pokemon={item} />
        )}
        ListEmptyComponent={
          <Text style={styles.vazio}>
            Nenhum Pokémon encontrado.
          </Text>
        }
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#000000ff',
  },

  titulo: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
  },

  input: {
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    padding: 12,
    marginBottom: 10,
  },

  card: {
    backgroundColor: '#fff',
    marginTop: 15,
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
  },

  imagem: {
    width: 120,
    height: 120,
  },

  nome: {
    fontSize: 18,
    fontWeight: 'bold',
    textTransform: 'capitalize',
    marginTop: 5,
  },

  vazio: {
    textAlign: 'center',
    marginTop: 30,
    fontSize: 16,
  },
  button: {
    backgroundColor: 'blue'
  }
});

export default CardPokemon;