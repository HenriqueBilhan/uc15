import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

const Calculadora = () => {
  const [numero1, setNumero1] = useState("");
  const [numero2, setNumero2] = useState("");
  const [resultado, setResultado] = useState(0);

  return (
    <View>
      <TextInput
        style={styles.input}
        placeholder="Primeiro número"
        value={numero1}
        onChangeText={setNumero1}
      />

      <TextInput
        style={styles.input}
        placeholder="Segundo número"
        value={numero2}
        onChangeText={setNumero2}
      />

      <Text>Resultado: {resultado}</Text>

      <TouchableOpacity
        style={styles.botao}
        onPress={() => setResultado(Number(numero1) + Number(numero2))}
      >
        <Text>Somar</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Calculadora;

const styles = StyleSheet.create({
  input: {
    borderWidth: 1,
    borderColor: "#000",
    borderRadius: 8,
    padding: 8,
    marginBottom: 10,
    width: 200,
  },

  botao: {
    backgroundColor: "orange",
    padding: 8,
    borderRadius: 15,
    alignItems: "center",
    marginTop: 10,
  },
});