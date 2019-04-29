import React, { Component, useEffect } from "react";
import { StyleSheet, View } from "react-native";
import Game from "./screens/Game";
import CountDown from "react-native-countdown-component";
import Award from "./screens/Award";
import Orientation from "react-native-orientation";
export default () => {
  return (
    <View>
      <Game />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5FCFF"
  },
  welcome: {
    fontSize: 20,
    textAlign: "center",
    margin: 10
  },
  instructions: {
    textAlign: "center",
    color: "#333333",
    marginBottom: 5
  }
});
