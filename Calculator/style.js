import React, { Component } from "react";
import {
  Platform,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput
} from "react-native";

export default (styles = StyleSheet.create({
  container: { flex: 1, borderWidth: 1, borderColor: "black" },
  containerInput: { flex: 2, backgroundColor: "#e6ffe6", borderWidth: 1 },
  containerOutput: {
    flex: 1,
    backgroundColor: "#e6ffe6",
    fontSize: 30,
    color: "black",
    borderWidth: 1,
    borderTopWidth: 0.2
  },
  containerButtonNumber: {
    flex: 4
  },
  buttonNumber: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    backgroundColor: "#e6ffe6"
  },
  number: {
    borderColor: "black",
    borderWidth: 1,
    padding: "6%",
    width: "25%",
    justifyContent: "center",
    alignItems: "center"
  },
  font: {
    fontSize: 20,
    color: "#000000"
  },
  addMargin: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    borderColor: "black",
    backgroundColor: "#ffffe6"
  },
  result: {
    fontSize: 20,
    color: "black",
    alignItems: "center"
  },
  clear_Del: {
    width: "50%",
    justifyContent: "center",
    alignItems: "center"
  },
  input: {
    fontSize: 20,
    color: "black",
    fontFamily: "times"
  },
  viewInput: {
    flex: 1,
    borderWidth: 1
  }
}));
