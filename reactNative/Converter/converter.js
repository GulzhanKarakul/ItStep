import React, { useState } from "react";
import {
  Pressable,
  StyleSheet,
  TextInput,
  Text,
  View,
  ScrollView
} from "react-native";

function convert(currency, number) {
    let result;

    switch (currency) {
        case "dollar":
            result = number * 477.46;
            break;
        case "euro":
            result = number * 506.69;
            break;
        case "yuan":
            result = number * 65.44;
            break;
        default:
            break;
  }

  return result.toFixed(2);
}

function App() {
  const [result, setResult] = useState(0);
  const [textInput, setTextInput] = useState(0);

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.text}>Введите сумму в тенге:</Text>

      <TextInput
        keyboardType="numeric"
        value={textInput}
        style={styles.input}
        onChangeText={(text) => {
          setTextInput(text);
        }}
      />

      <Text style={styles.text}>Равно: {result}</Text>

      <View style={styles.flex}>
        <Pressable
          style={styles.btn}
          onPress={() => {
            setResult(convert("dollar", textInput));
          }}
        >
          Доллар
        </Pressable>
        <Pressable
          style={styles.btn}
          onPress={() => {
            setResult(convert("euro", textInput));
          }}
        >
          Евро
        </Pressable>
        <Pressable
          style={styles.btn}
          onPress={() => {
            setResult(convert("yuan", textInput));
          }}
        >
          Юань
        </Pressable>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        justifyContent: "flex-start",
        alignItems: "center",
        backgroundColor: "#000",
        color: "#fff",
        fontFamily: "Arial",
        paddingVertical: 20
    },
    flex: {
        flex: 2,
        flexWrap: "wrap",
        flexDirection: "row",
        justifyContent: "space-around",
        alignItems: "flex-start",
        height: 70,
        padding: 0,
        paddingRight: 15
    },
    text: {
        color: "#fff",
        fontSize: 18,
        textAlign: "center",
        marginVertical: 10
    },
    btn: {
        width: 100,
        height: 60,
        backgroundColor: "#333",
        borderRadius: 30,
        textAlign: "center",
        lineHeight: 60,
        fontSize: 20,
        color: "#fff",
        marginBottom: 10
    },
    input: {
        color: "white",
        borderRadius: 10,
        borderWidth: 2,
        borderColor: "#fff",
        padding: 10,
        marginBottom: 10,
        width: 200,
        fontSize: 18,
        textAlign: "center"
    }
});

export default App;
