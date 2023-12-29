import React, { useState } from "react";
import {
  Image,
  Pressable,
  StyleSheet,
  TextInput,
  Text,
  View
} from "react-native";

function calc(str) {
  const action = ["-", "+", "/", "*"];
  let result, operator;

  for (let a of action) {
    if (str.includes(a)) operator = a;
  }

  let arr = str.split(operator);

  switch (operator) {
    case "+":
      return (result = +arr[0] + +arr[1]);
      break;
    case "-":
      return (result = +arr[0] - +arr[1]);
      break;
    case "*":
      return (result = +arr[0] * +arr[1]);
      break;
    case "/":
      return (result = +arr[0] / +arr[1]);
      break;
    default:
      break;
  }

  return result;
}

function App() {
  const [result, setResult] = useState(0);
  const [textInput, setTextInput] = useState("");

  return (
    <View style={styles.calc}>
      <View style={styles.calcScreen}>
        <Text style={styles.calcScreenText}>{result}</Text>
      </View>

      <View style={styles.buttons}>
        <View style={styles.flex}>
          <Pressable style={[styles.btn, styles.bgOrange]}>MC</Pressable>
          <Pressable style={[styles.btn, styles.bgOrange]}>M+</Pressable>
          <Pressable style={[styles.btn, styles.bgOrange]}>M-</Pressable>
          <Pressable style={[styles.btn, styles.bgOrange]}>MR</Pressable>
        </View>

        <View style={styles.flex}>
          <Pressable style={[styles.btn, styles.bgOrange]}>C</Pressable>
          <Pressable style={[styles.btn, styles.bgOrange]}>BSp</Pressable>
          <Pressable style={[styles.btn, styles.bgOrange]}>/</Pressable>
          <Pressable style={[styles.btn, styles.bgOrange]}>x</Pressable>
        </View>

        <View style={styles.flex}>
          <Pressable style={styles.btn}>7</Pressable>
          <Pressable style={styles.btn}>8</Pressable>
          <Pressable style={styles.btn}>9</Pressable>
          <Pressable style={[styles.btn, styles.bgOrange]}>-</Pressable>
        </View>

        <View style={styles.flex}>
          <Pressable style={styles.btn}>4</Pressable>
          <Pressable style={styles.btn}>5</Pressable>
          <Pressable style={styles.btn}>6</Pressable>
          <Pressable style={[styles.btn, styles.bgOrange]}>+</Pressable>
        </View>

        <View style={styles.flex}>
          <Pressable style={styles.btn}>1</Pressable>
          <Pressable style={styles.btn}>2</Pressable>
          <Pressable style={styles.btn}>3</Pressable>
          <Pressable style={[styles.btn, styles.bgOrange]}>=</Pressable>
        </View>

        <View style={styles.flex}>
          <Pressable style={[styles.btn, styles.btnZero]}>0</Pressable>
          <Pressable style={[styles.btn, styles.bgOrange]}>.</Pressable>
          <Pressable style={[styles.btn, styles.bgOrange]}>AC</Pressable>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  calc: {
    margin: "auto",
    width: 300,
    height: 600,
    borderRadius: 50,
    backgroundColor: "#000",
    color: "#fff",
    fontFamily: "Arial",
    padding: 18,
    shadowColor: "#4f4f4f",
    shadowOffset: { width: 4, height: 4 },
    shadowRadius: 4,
    display: "flex",
    alignItems: "flex-end",
    flexWrap: "wrap"
  },
  calcScreen: {
    height: "100px",
    padding: 10,
    flex: 1,
    width: "100%",
    justifyContent: "flex-end",
    alignItems: "flex-end",
    paddingRight: "28px"
  },
  calcScreenText: {
    textAlign: "right",
    fontSize: 60,
    margin: 0,
    color: "#fff",
    margin-b
  },
  flex: {
    flex: 1,
    flexDirection: "row",
    height: 70
    // backgroundColor: 'green',
  },
  buttons: {
    flex: 3,
    // flexDirection:'row',
    flexWrap: "wrap"
    // alignItems: 'flex-end',
    // alignContent: 'flex-end',
  },
  btn: {
    width: 60,
    height: 60,
    backgroundColor: "#333",
    borderRadius: 30,
    textAlign: "center",
    lineHeight: 60,
    fontSize: 20,
    cursor: "pointer",
    userSelect: "none",
    margin: 5
  },
  btnHover: {
    filter: "brightness(120%)"
  },
  btnActive: {
    filter: "brightness(90%)"
  },
  btnZero: {
    width: 130,
    borderRadius: 34
  },
  bgOrange: {
    backgroundColor: "#f2b457d7"
  }
});

export default App;
