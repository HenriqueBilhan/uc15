import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React, { useState } from "react";

const LigaDesliga = () => {
  const [ligado, setLigado] = useState(false);

  return (
    <View>
      <Text>{ligado ? " Ligado " : " Desligado "}</Text>

      <TouchableOpacity
        style={styles.botao}
        onPress={() => setLigado(!ligado)}
      >
        <Text>{ligado ? "Desligar" : "Ligar"}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default LigaDesliga;

const styles = StyleSheet.create({
  botao: {
    padding: 5,
    backgroundColor: "orange",
    alignItems: "center",
    borderRadius: 15,
  },
});