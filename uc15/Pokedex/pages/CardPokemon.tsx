import React, { useEffect, useState } from 'react';

import {
  View,
  Text,
  TextInput,
  FlatList,
  Image,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';

const CardPokemon = ({ navigation }: any) => {
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

  function Card({ pokemon }: any) {
    return (
      <View style={styles.card}>
        <Image
          source={{ uri: pokemon.imagem }}
          style={styles.imagem}
        />

        <Text style={styles.nome}>
          #{pokemon.id} - {pokemon.nome}
        </Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>
        Pokédex
      </Text>

      <Text style={styles.subtitulo}>
        1ª Geração
      </Text>

      <TextInput
        style={styles.input}
        placeholder="Digite o nome do Pokémon"
        value={pesquisa}
        onChangeText={setPesquisa}
      />

      <TouchableOpacity
        style={styles.botaoPesquisar}
        onPress={pesquisar}
      >
        <Text style={styles.textoBotao}>
          Pesquisar
        </Text>
      </TouchableOpacity>

      <FlatList
        data={resultado}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <Card pokemon={item} />
        )}
        showsVerticalScrollIndicator={false}
        ListEmptyComponent={
          <Text style={styles.vazio}>
            Nenhum Pokémon encontrado.
          </Text>
        }
      />

      <TouchableOpacity
        style={styles.botaoVoltar}
        onPress={() => navigation.goBack()}
      >
        <Text style={styles.textoBotao}>
          Voltar
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    paddingTop: 60,
    backgroundColor: '#000',
  },

  titulo: {
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#E53935',
  },

  subtitulo: {
    fontSize: 18,
    textAlign: 'center',
    color: '#FFF',
    marginBottom: 20,
  },

  input: {
    backgroundColor: '#FFF',
    borderRadius: 8,
    padding: 12,
    marginBottom: 10,
  },

  botaoPesquisar: {
    backgroundColor: '#E53935',
    padding: 14,
    borderRadius: 8,
    alignItems: 'center',
    marginBottom: 10,
  },

  card: {
    backgroundColor: '#FFF',
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
    color: '#FFF',
    textAlign: 'center',
    marginTop: 30,
    fontSize: 16,
  },

  botaoVoltar: {
    backgroundColor: '#555',
    padding: 14,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 10,
  },

  textoBotao: {
    color: '#FFF',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default CardPokemon;